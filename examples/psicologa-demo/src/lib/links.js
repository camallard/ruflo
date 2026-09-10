import siteConfig from '../data/siteConfig';

/**
 * Monta o link do WhatsApp a partir do numero e da mensagem
 * definidos em src/data/siteConfig.js.
 *
 * Resultado: https://wa.me/5511999999999?text=Ol%C3%A1!...
 */
export function whatsappLink(mensagem) {
  const numero = String(siteConfig.contato.whatsappNumero).replace(/\D/g, '');
  const texto = mensagem ?? siteConfig.contato.whatsappMensagem;
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

/**
 * Monta o endereco de incorporacao (iframe) do Google Maps a partir de
 * siteConfig.GOOGLE_MAPS_LOCATION. Nao exige chave de API.
 */
export function mapaEmbedUrl(local = siteConfig.GOOGLE_MAPS_LOCATION) {
  return `https://www.google.com/maps?q=${encodeURIComponent(local)}&hl=pt-BR&z=15&output=embed`;
}

/** Link que abre o Google Maps em uma nova aba, para tracar rota. */
export function mapaLinkExterno(local = siteConfig.GOOGLE_MAPS_LOCATION) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local)}`;
}
