import { MapPin, Video, Clock, ArrowUpRight } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { mapaEmbedUrl, mapaLinkExterno } from '../lib/links';
import Reveal from './Reveal';

export default function Atendimento() {
  const { atendimento, imagens, GOOGLE_MAPS_LOCATION } = siteConfig;
  const { presencial, online } = atendimento;

  return (
    <section id="atendimento" className="relative overflow-hidden bg-cream/60 py-24 sm:py-32">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal as="p" className="eyebrow">
            {atendimento.sobretitulo}
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-[1.9rem] font-light leading-[1.22] text-ink sm:text-[2.4rem]">
              {atendimento.titulo}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 text-[1.02rem] leading-[1.8] text-ink-soft">{atendimento.texto}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* ------------------------ Presencial + mapa ------------------------ */}
          <Reveal>
            <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-clay-200/70 bg-canvas">
              <div className="p-7 sm:p-9">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-50">
                  <MapPin className="h-5 w-5 text-sage-600" strokeWidth={1.5} />
                </span>

                <h3 className="mt-6 font-display text-[1.35rem] font-normal text-ink">
                  {presencial.titulo}
                </h3>

                <address className="mt-4 not-italic text-[0.97rem] leading-[1.75] text-ink-soft">
                  {presencial.endereco}
                  <br />
                  {presencial.bairro} · {presencial.cidade}
                </address>

                <p className="mt-3 text-[0.88rem] text-ink-muted">{presencial.detalhe}</p>

                <a
                  href={mapaLinkExterno()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-1.5 py-1 text-[0.9rem] text-sage-700 transition-colors hover:text-sage-600"
                >
                  Ver rota no Google Maps
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-calm group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/*
                MAPA DO GOOGLE
                O endereco vem de siteConfig.GOOGLE_MAPS_LOCATION.
                Nao e preciso chave de API nem mexer neste componente.
              */}
              <div className="relative mt-auto aspect-[16/10] w-full border-t border-clay-200/70 bg-cream">
                {/*
                  Camada de reserva, exibida por tras do mapa. Se o embed do
                  Google for bloqueado (bloqueador de anuncios, extensao de
                  privacidade, rede corporativa), o visitante ve o endereco e o
                  link da rota em vez de um retangulo vazio.
                */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
                  <MapPin className="h-5 w-5 text-clay-400" strokeWidth={1.5} />
                  <p className="text-[0.88rem] text-ink-soft">
                    {presencial.endereco} — {presencial.bairro}
                  </p>
                  <a
                    href={mapaLinkExterno()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.85rem] text-sage-700 underline underline-offset-4"
                  >
                    Abrir no Google Maps
                  </a>
                </div>

                <iframe
                  title={`Mapa: ${GOOGLE_MAPS_LOCATION}`}
                  src={mapaEmbedUrl()}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* -------------------------- Online + foto -------------------------- */}
          <Reveal delay={140}>
            <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-clay-200/70 bg-canvas">
              <div className="p-7 sm:p-9">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-50">
                  <Video className="h-5 w-5 text-sage-600" strokeWidth={1.5} />
                </span>

                <h3 className="mt-6 font-display text-[1.35rem] font-normal text-ink">
                  {online.titulo}
                </h3>

                <p className="mt-4 text-[0.97rem] leading-[1.75] text-ink-soft">{online.texto}</p>
                <p className="mt-3 text-[0.88rem] text-ink-muted">{online.detalhe}</p>

                <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-cream px-4 py-2 text-[0.88rem] text-ink-soft">
                  <Clock className="h-4 w-4 text-clay-500" strokeWidth={1.5} />
                  {atendimento.horarios}
                </p>
              </div>

              <div className="mt-auto aspect-[16/10] w-full overflow-hidden border-t border-clay-200/70">
                <img
                  src={imagens.atendimento}
                  alt="Sala de atendimento acolhedora, com tons claros e naturais"
                  width="1100"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
