import siteConfig from '../data/siteConfig';
import Reveal from './Reveal';

export default function Sobre() {
  const { sobre, imagens, profissional } = siteConfig;

  return (
    <section id="sobre" className="relative overflow-hidden bg-cream/60 py-24 sm:py-32">
      <div className="shell grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Foto da profissional */}
        <Reveal soft className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-sage-100/70"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={imagens.sobreRetrato}
              alt={`${profissional.nome}, ${profissional.titulo.toLowerCase()}`}
              width="900"
              height="900"
              loading="lazy"
              decoding="async"
              className="aspect-square h-full w-full scale-[1.12] object-cover object-[50%_28%]"
            />
          </div>
        </Reveal>

        {/* Texto e ficha profissional */}
        <div>
          <Reveal as="p" className="eyebrow">
            {sobre.sobretitulo}
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-[1.75rem] font-light leading-[1.28] text-ink sm:text-[2.15rem]">
              {sobre.titulo}
            </h2>
          </Reveal>

          {sobre.paragrafos.map((texto, i) => (
            <Reveal key={i} delay={170 + i * 90}>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-[1.8] text-ink-soft">{texto}</p>
            </Reveal>
          ))}

          {/* Ficha — cada linha vem de siteConfig.sobre.ficha */}
          <Reveal delay={400}>
            <dl className="mt-12 max-w-2xl">
              {sobre.ficha.map((linha) => (
                <div
                  key={linha.rotulo}
                  className="hairline grid gap-1 py-4 sm:grid-cols-[10.5rem_1fr] sm:gap-6"
                >
                  <dt className="text-[0.72rem] uppercase tracking-widest2 text-ink-muted">
                    {linha.rotulo}
                  </dt>
                  <dd className="text-[0.97rem] text-ink">{linha.valor}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
