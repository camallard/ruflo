import { ArrowRight } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { whatsappLink } from '../lib/links';
import { useParallax } from '../hooks/useParallax';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const { hero, imagens, profissional } = siteConfig;
  const retratoRef = useParallax(0.035);

  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-36 lg:pb-36 lg:pt-44">
      {/* Manchas de cor muito suaves ao fundo — puramente decorativas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-sage-100/50 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-clay-200/40 blur-3xl" />
      </div>

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* ---------------------------- Coluna do texto --------------------------- */}
        <div>
          <p className="hero-in eyebrow flex items-center gap-3" style={{ animationDelay: '80ms' }}>
            <span className="h-px w-8 bg-sage-300" />
            {hero.selo}
          </p>

          <h1
            className="hero-in mt-7 font-display text-[2.6rem] font-light leading-[1.08] tracking-tight text-ink sm:text-[3.4rem] lg:text-[4rem]"
            style={{ animationDelay: '180ms' }}
          >
            {hero.titulo}
          </h1>

          <p
            className="hero-in mt-7 max-w-xl text-[1.06rem] leading-[1.75] text-ink-soft"
            style={{ animationDelay: '300ms' }}
          >
            {hero.texto}
          </p>

          <div
            className="hero-in mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5"
            style={{ animationDelay: '420ms' }}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
              {hero.botaoPrimario}
            </a>

            <a href="#sobre" className="btn-ghost group justify-center sm:justify-start">
              {hero.botaoSecundario}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-calm group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ---------------------------- Coluna da foto ---------------------------- */}
        <div className="hero-in relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: '280ms' }}>
          {/* Moldura deslocada atras da foto */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full rounded-[2.25rem] border border-sage-200/70 sm:-left-6 sm:-top-6"
          />

          <div ref={retratoRef} className="relative overflow-hidden rounded-[2rem] bg-cream shadow-lift">
            <img
              src={imagens.heroRetrato}
              alt={`Retrato de ${profissional.nome}, ${profissional.titulo.toLowerCase()}`}
              width="1000"
              height="1250"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="aspect-[4/5] h-full w-full object-cover"
            />
            {/* Vinheta discreta na base, para o cartao ter contraste */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/25 to-transparent"
            />
          </div>

          {/* Cartao com nome e registro */}
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-clay-200/70 bg-canvas/95 px-5 py-3.5 shadow-soft backdrop-blur-sm sm:left-8">
            <p className="font-display text-[0.98rem] leading-tight text-ink">{hero.legendaFoto}</p>
            <p className="mt-1 text-[0.76rem] tracking-wide text-ink-muted">{hero.legendaFotoApoio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
