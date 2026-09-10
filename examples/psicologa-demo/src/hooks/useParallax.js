import { useEffect, useRef } from 'react';

/**
 * Parallax discreto: desloca o elemento alguns pixels conforme a rolagem.
 *
 * `intensidade` baixa de proposito (padrao 0.06) para o efeito ser
 * percebido como sofisticacao, e nao como movimento chamativo.
 * Desativado automaticamente para quem prefere menos movimento e em telas
 * pequenas, onde o efeito atrapalha mais do que ajuda.
 */
export function useParallax(intensidade = 0.06) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const telaPequena = window.matchMedia('(max-width: 767px)').matches;
    if (semMovimento || telaPequena) return undefined;

    let frame = null;

    const atualizar = () => {
      frame = null;
      const rect = el.getBoundingClientRect();
      const centroTela = window.innerHeight / 2;
      const distancia = rect.top + rect.height / 2 - centroTela;
      const deslocamento = Math.max(-40, Math.min(40, -distancia * intensidade));
      el.style.transform = `translate3d(0, ${deslocamento.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(atualizar);
    };

    atualizar();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [intensidade]);

  return ref;
}
