# Site DEMO — Psicóloga

Site de demonstração, de uma página, para apresentar a uma psicóloga.

> **Todos os dados são fictícios.** Nome, CRP, endereço, telefone, e-mail e
> Instagram foram inventados para a demonstração. As fotos são de banco de
> imagens (Unsplash) e servem apenas como referência visual.

## Rodar o projeto

```bash
npm install
npm run dev      # abre em http://localhost:5173
```

```bash
npm run build    # gera a pasta dist/ pronta para publicar
npm run preview  # confere o resultado do build
```

Publicar: suba a pasta `dist/` em qualquer hospedagem estática
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, hospedagem comum).
Os caminhos são relativos, então funciona também em subpastas.

## O que trocar pelos dados reais

Praticamente tudo está em **um único arquivo**:

```
src/data/siteConfig.js
```

Os pontos marcados com `[SUBSTITUIR]` são os dados fictícios. Os principais:

| O que | Onde |
|---|---|
| Nome, título, CRP, cidade | `profissional` |
| Número do WhatsApp e mensagem pronta | `contato.whatsappNumero` / `whatsappMensagem` |
| Instagram e e-mail | `contato` |
| Textos de todas as seções | `hero`, `espaco`, `areas`, `sobre`, `processo`, `atendimento`, `chamadaFinal` |
| Formação, abordagem, registro | `sobre.ficha` |
| Endereço do consultório | `atendimento.presencial` |
| **Localização do Google Maps** | `GOOGLE_MAPS_LOCATION` |

### WhatsApp

```js
whatsappNumero: '5511999999999'   // 55 = Brasil, 11 = DDD, resto = número
```

Só números. O link `https://wa.me/...` e a mensagem pré-preenchida são montados
sozinhos, e valem para os três botões (topo, seção final e botão flutuante).

### Google Maps

```js
GOOGLE_MAPS_LOCATION: 'Rua dos Pinheiros, 128, Pinheiros, São Paulo - SP'
```

Escreva o endereço como você escreveria na busca do Google Maps. Não precisa de
chave de API nem de gerar código de incorporação.

### Fotos

Substitua os arquivos em `public/images/`, mantendo os nomes — ou aponte outros
caminhos em `siteConfig.imagens`. Proporções recomendadas:

| Arquivo | Proporção | Onde aparece |
|---|---|---|
| `psicologa-hero.jpg` | 4:5 | primeira dobra |
| `psicologa-sobre.jpg` | 1:1 | seção "Sobre mim" |
| `espaco-terapeutico.jpg` | 4:5 | seção "Um espaço para você" |
| `atendimento.jpg` | 11:8 | seção "Atendimento" |

As duas fotos da profissional devem ser **da mesma pessoa** — na demo elas são
dois enquadramentos da mesma imagem.

Troque também o ícone da aba em `public/favicon.svg` e o título/descrição no
topo de `index.html` (usados pelo Google e ao compartilhar o link).

## Estrutura

```
src/
  data/siteConfig.js      ← todo o conteúdo editável
  lib/links.js            ← monta os links de WhatsApp e do mapa
  hooks/                  ← animações de entrada, parallax, cabeçalho
  components/             ← uma seção por arquivo
  fonts.css               ← fontes servidas pelo próprio site
public/images/            ← fotos
```

## Detalhes técnicos

- **React + Vite + Tailwind CSS**, `lucide-react` para os ícones. Nada além disso.
- **Fontes locais** (Fraunces e Inter, Open Font License): sem requisição ao
  Google, sem “pulo” de texto ao carregar e sem enviar o IP de quem visita para
  terceiros — o que importa no site de uma psicóloga.
- **Animações discretas** com `IntersectionObserver`, desligadas
  automaticamente para quem usa “reduzir movimento” no sistema.
- Verificado sem rolagem horizontal de 320px a 1440px, com menu operável por
  teclado (Enter abre, Esc fecha).
