import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { whatsappLink } from '../lib/links';
import { useScrolled } from '../hooks/useScrolled';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const compacto = useScrolled(20);
  const { profissional, menu } = siteConfig;

  // Impede a pagina de rolar por tras do menu aberto no celular.
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuAberto]);

  // Fecha o menu com a tecla Esc.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuAberto(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-calm ${
        compacto || menuAberto
          ? 'border-b border-clay-200/60 bg-canvas/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-all duration-500 ease-calm ${
          compacto ? 'h-16' : 'h-20 md:h-24'
        }`}
      >
        {/* Nome / logotipo — [SUBSTITUIR] em siteConfig.profissional.nome */}
        <a
          href="#inicio"
          onClick={() => setMenuAberto(false)}
          className="font-display text-lg tracking-tight text-ink transition-colors hover:text-sage-600 sm:text-xl"
        >
          {profissional.nome}
        </a>

        {/* Navegacao — computador */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.rotulo}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-sage-400 transition-transform duration-300 ease-calm group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hidden border border-sage-600/25 px-5 py-2 text-sm text-sage-700 hover:border-sage-600/50 hover:bg-sage-50 sm:inline-flex"
          >
            Agendar
          </a>

          {/* Botao do menu — celular e tablet */}
          <button
            type="button"
            onClick={() => setMenuAberto((v) => !v)}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-clay-200/50 lg:hidden"
          >
            {menuAberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Painel do menu no celular */}
      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-clay-200/60 bg-canvas transition-[max-height,opacity] duration-500 ease-calm lg:hidden ${
          menuAberto ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="shell flex flex-col py-4" aria-label="Navegação principal (celular)">
          {menu.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuAberto(false)}
              style={{ transitionDelay: menuAberto ? `${80 + i * 55}ms` : '0ms' }}
              className={`border-b border-clay-200/50 py-4 font-display text-xl text-ink transition-all duration-500 ease-calm ${
                menuAberto ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              {item.rotulo}
            </a>
          ))}

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAberto(false)}
            className="btn-primary mt-6 w-full"
          >
            Agendar uma conversa
          </a>
        </nav>
      </div>
    </header>
  );
}
