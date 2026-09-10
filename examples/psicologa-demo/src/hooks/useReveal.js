import { useEffect, useRef, useState } from 'react';

/*
 * Margem superior propositalmente enorme: faz o observador tratar como
 * "ja visivel" tudo o que esta na tela OU acima dela.
 *
 * Sem isso, um salto grande de rolagem (clicar num link do menu, arrastar a
 * barra de rolagem, um giro rapido da roda do mouse) pode passar por cima de
 * uma secao sem que o navegador chegue a registrar a interseccao — e a secao
 * ficaria invisivel. Com a margem, qualquer secao que ja tenha sido
 * ultrapassada conta como vista e aparece normalmente.
 */
const MARGEM = '9999px 0px -6% 0px';

/**
 * Observa o elemento e devolve `visivel = true` quando ele entra na tela.
 * Usado para as animacoes de entrada durante a rolagem.
 *
 * A animacao acontece uma unica vez por elemento — nada "pisca" ao subir
 * e descer a pagina.
 */
export function useReveal() {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Sem suporte a IntersectionObserver: mostra o conteudo direto.
    if (typeof IntersectionObserver === 'undefined') {
      setVisivel(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // isIntersecting cobre a entrada normal; boundingClientRect.top < 0
        // cobre o caso de a secao ja ter ficado para tras.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: MARGEM }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visivel };
}
