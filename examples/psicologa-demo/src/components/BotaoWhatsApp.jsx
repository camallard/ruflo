import siteConfig from '../data/siteConfig';
import { whatsappLink } from '../lib/links';
import { useScrolled } from '../hooks/useScrolled';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Botao flutuante no canto inferior direito.
 * Aparece suavemente depois que a pessoa comeca a rolar a pagina, para nao
 * competir com o botao principal do hero.
 */
export default function BotaoWhatsApp() {
  const visivel = useScrolled(520);
  const { contato } = siteConfig;

  return (
    <a
      href={whatsappLink(contato.whatsappMensagemFlutuante)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      tabIndex={visivel ? 0 : -1}
      aria-hidden={!visivel}
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-0 overflow-hidden rounded-full
                  bg-sage-600 text-canvas shadow-lift transition-all duration-500 ease-calm
                  hover:bg-sage-700 sm:bottom-8 sm:right-8
                  ${visivel ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-4 scale-90 opacity-0'}`}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <WhatsAppIcon className="h-6 w-6" />
      </span>

      {/* Rotulo que se abre ao passar o mouse (somente em telas maiores) */}
      <span className="hidden max-w-0 whitespace-nowrap text-[0.9rem] font-medium transition-all duration-500 ease-calm group-hover:max-w-[12rem] group-hover:pr-6 sm:block">
        Agendar uma conversa
      </span>
    </a>
  );
}
