import siteConfig from '../data/siteConfig';
import { whatsappLink } from '../lib/links';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';

export default function ChamadaFinal() {
  const { chamadaFinal } = siteConfig;

  return (
    <section id="contato" className="px-4 py-24 sm:px-6 sm:py-32">
      <Reveal soft>
        <div className="relative mx-auto max-w-content overflow-hidden rounded-[2rem] bg-sage-600 px-6 py-20 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-28">
          {/* Textura suave ao fundo */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sage-500/50 blur-3xl" />
            <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-sage-700/40 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-[1.9rem] font-light leading-[1.2] text-canvas sm:text-[2.6rem]">
              {chamadaFinal.titulo}
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-[1.02rem] leading-[1.8] text-sage-50/85">
              {chamadaFinal.texto}
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-10 bg-canvas px-8 py-4 text-ink shadow-soft transition-all duration-300 ease-calm hover:-translate-y-0.5 hover:bg-white hover:shadow-lift"
            >
              <WhatsAppIcon className="h-[1.05rem] w-[1.05rem] text-sage-600" />
              {chamadaFinal.botao}
            </a>

            <p className="mt-6 text-[0.84rem] text-sage-50/70">{chamadaFinal.apoio}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
