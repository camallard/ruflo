import { useEffect, useState } from 'react';

/** Devolve `true` quando a pagina passou de `offset` pixels de rolagem. */
export function useScrolled(offset = 24) {
  const [passou, setPassou] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassou(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return passou;
}
