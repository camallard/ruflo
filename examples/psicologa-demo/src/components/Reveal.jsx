import { useReveal } from '../hooks/useReveal';

/**
 * Envolve qualquer conteudo e o faz entrar suavemente quando aparece na tela.
 *
 *   <Reveal delay={120}>...</Reveal>
 *
 * `delay` (ms) cria o efeito de escada entre elementos irmaos.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  soft = false,
  className = '',
  ...rest
}) {
  const { ref, visivel } = useReveal();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${soft ? 'reveal-soft' : ''} ${visivel ? 'reveal-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
