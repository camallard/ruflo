import { Waves, Compass, Users, Leaf } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import Reveal from './Reveal';

/**
 * Mapeia o nome escrito em siteConfig.areas.itens[].icone para o icone real.
 * Para acrescentar uma opcao, importe o icone acima e registre aqui.
 */
const ICONES = {
  ondas: Waves,
  bussola: Compass,
  pessoas: Users,
  folha: Leaf,
};

export default function ComoPossoAjudar() {
  const { areas } = siteConfig;

  return (
    <section className="py-24 sm:py-32">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal as="p" className="eyebrow">
            {areas.sobretitulo}
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-[1.9rem] font-light leading-[1.22] text-ink sm:text-[2.4rem]">
              {areas.titulo}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {areas.itens.map((item, i) => {
            const Icone = ICONES[item.icone] ?? Leaf;

            return (
              <Reveal key={item.titulo} delay={i * 110}>
                <article
                  className="group h-full rounded-[1.5rem] border border-clay-200/70 bg-canvas p-7
                             transition-all duration-500 ease-calm
                             hover:-translate-y-1.5 hover:border-sage-200 hover:shadow-lift"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-50 transition-colors duration-500 ease-calm group-hover:bg-sage-100">
                    <Icone className="h-[1.35rem] w-[1.35rem] text-sage-600" strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-6 font-display text-[1.22rem] font-normal leading-snug text-ink">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-[1.72] text-ink-soft">{item.texto}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
