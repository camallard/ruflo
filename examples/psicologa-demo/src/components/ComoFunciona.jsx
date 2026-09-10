import siteConfig from '../data/siteConfig';
import Reveal from './Reveal';

export default function ComoFunciona() {
  const { processo } = siteConfig;

  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal as="p" className="eyebrow">
            {processo.sobretitulo}
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-[1.9rem] font-light leading-[1.22] text-ink sm:text-[2.4rem]">
              {processo.titulo}
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Linha que conecta os tres passos (apenas em telas grandes) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-clay-200/80 lg:block"
          />

          <ol className="grid gap-12 lg:grid-cols-3 lg:gap-10">
            {processo.passos.map((passo, i) => (
              <Reveal key={passo.numero} delay={i * 160}>
                <li className="relative">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="relative z-10 inline-flex items-center bg-canvas font-display text-[1.6rem] font-light text-clay-500 lg:pr-5">
                      {passo.numero}
                    </span>
                    <span aria-hidden="true" className="h-px flex-1 bg-clay-200/80 lg:hidden" />
                  </div>

                  <h3 className="mt-5 font-display text-[1.3rem] font-normal text-ink lg:mt-7">
                    {passo.titulo}
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.97rem] leading-[1.75] text-ink-soft">
                    {passo.texto}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
