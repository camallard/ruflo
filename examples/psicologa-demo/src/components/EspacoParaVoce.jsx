import { Check } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { useParallax } from '../hooks/useParallax';
import Reveal from './Reveal';

export default function EspacoParaVoce() {
  const { espaco, imagens } = siteConfig;
  const imagemRef = useParallax(0.05);

  return (
    <section className="relative overflow-hidden bg-cream/60 py-24 sm:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagem complementar */}
        <Reveal soft className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              ref={imagemRef}
              src={imagens.espaco}
              alt="Ambiente claro e tranquilo, com plantas e luz natural"
              width="1100"
              height="1300"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] h-full w-full scale-[1.06] object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-4 hidden h-28 w-28 rounded-full border border-clay-300/60 sm:block"
          />
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal as="p" className="eyebrow">
            {espaco.sobretitulo}
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-[1.9rem] font-light leading-[1.22] text-ink sm:text-[2.5rem]">
              {espaco.titulo}
            </h2>
          </Reveal>

          {espaco.paragrafos.map((texto, i) => (
            <Reveal key={i} delay={180 + i * 90}>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.8] text-ink-soft">{texto}</p>
            </Reveal>
          ))}

          <Reveal delay={400}>
            <ul className="mt-10 space-y-3.5">
              {espaco.destaques.map((item) => (
                <li key={item} className="flex items-center gap-3.5 text-[0.97rem] text-ink-soft">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100">
                    <Check className="h-3.5 w-3.5 text-sage-600" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
