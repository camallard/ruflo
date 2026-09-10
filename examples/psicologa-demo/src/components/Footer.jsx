import { Instagram } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { whatsappLink } from '../lib/links';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const { profissional, contato, rodape } = siteConfig;

  return (
    <footer className="hairline">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Identificacao */}
          <div>
            <p className="font-display text-lg text-ink">{profissional.nome}</p>
            <p className="mt-1.5 text-[0.88rem] text-ink-muted">
              {profissional.titulo} · {profissional.crp}
            </p>
            <p className="mt-1 text-[0.88rem] text-ink-muted">{profissional.cidade}</p>
          </div>

          {/* Contatos */}
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 py-1 text-[0.92rem] text-ink-soft transition-colors hover:text-sage-700"
            >
              <WhatsAppIcon className="h-4 w-4 text-sage-600" />
              WhatsApp
            </a>

            <a
              href={contato.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 py-1 text-[0.92rem] text-ink-soft transition-colors hover:text-sage-700"
            >
              <Instagram className="h-4 w-4 text-sage-600" strokeWidth={1.5} />
              {contato.instagramUsuario}
            </a>
          </div>
        </div>

        {rodape.aviso ? (
          <p className="hairline mt-10 pt-8 text-[0.8rem] leading-relaxed text-ink-muted">
            {rodape.aviso}
          </p>
        ) : null}

        <p className={`text-[0.8rem] text-ink-muted ${rodape.aviso ? 'mt-4' : 'hairline mt-10 pt-8'}`}>
          {rodape.copyright}
        </p>
      </div>
    </footer>
  );
}
