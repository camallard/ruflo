/* ==========================================================================
   ARQUIVO UNICO DE CONFIGURACAO DO SITE
   --------------------------------------------------------------------------
   TODO o conteudo editavel do site esta neste arquivo.
   Voce NAO precisa mexer em nenhum componente para trocar os dados.

   >>> TODOS OS DADOS ABAIXO SAO FICTICIOS. Substitua pelos dados reais. <<<

   Como usar:
   1. Troque os textos marcados com  [SUBSTITUIR]
   2. Troque o numero de WhatsApp em  contato.whatsappNumero
   3. Troque o endereco em  atendimento.presencial  e  atendimento.mapaQuery
   4. Troque as fotos colocando os arquivos em  public/images/
      (mantenha os mesmos nomes ou atualize os caminhos em  imagens)
   ========================================================================== */

export const siteConfig = {
  /* ------------------------------------------------------------------
     1. IDENTIDADE DA PROFISSIONAL          [SUBSTITUIR - dados ficticios]
     ------------------------------------------------------------------ */
  profissional: {
    nome: 'Marina Vasconcelos',
    nomeCurto: 'Marina', // usado em textos mais informais
    titulo: 'Psicóloga Clínica',
    crp: 'CRP 06/123456', // registro no Conselho Regional de Psicologia
    cidade: 'São Paulo — SP',
  },

  /* ------------------------------------------------------------------
     2. CONTATO                              [SUBSTITUIR - dados ficticios]
     ------------------------------------------------------------------
     whatsappNumero: formato internacional, SOMENTE numeros.
     55 = Brasil | 11 = DDD | 999999999 = numero
     Exemplo real: '5511987654321'
     ------------------------------------------------------------------ */
  contato: {
    whatsappNumero: '5511999999999',
    // Mensagem que ja vem escrita quando a pessoa abre o WhatsApp:
    whatsappMensagem: 'Olá! Gostaria de saber mais sobre os atendimentos.',
    // Mensagem alternativa usada no botao flutuante (opcional):
    whatsappMensagemFlutuante: 'Olá! Vim pelo site e gostaria de agendar uma conversa.',
    instagramUsuario: '@marinavasconcelos.psi',
    instagramUrl: 'https://instagram.com/', // [SUBSTITUIR] link real do perfil
    email: 'contato@marinavasconcelos.com.br', // opcional, usado no rodape
  },

  /* ------------------------------------------------------------------
     3. IMAGENS
     ------------------------------------------------------------------
     Coloque os arquivos em  public/images/  e referencie como './images/...'
     Fotos atuais sao imagens de banco (Unsplash) usadas apenas como
     PLACEHOLDER da demonstracao — troque pelas fotos reais.

     Dica de proporcao:
       retrato (hero) ...... 4:5   (ex.: 1000x1250px)
       retrato (sobre) ..... 1:1   (ex.: 900x900px)
       ambiente (espaco) ... 4:5   (ex.: 1100x1300px)
       ambiente (atend.) ... 11:8  (ex.: 1100x800px)
     ------------------------------------------------------------------ */
  imagens: {
    heroRetrato: './images/psicologa-hero.jpg',
    sobreRetrato: './images/psicologa-sobre.jpg',
    espaco: './images/espaco-terapeutico.jpg',
    atendimento: './images/atendimento.jpg',
  },

  /* ------------------------------------------------------------------
     4. MENU DO CABECALHO
     ------------------------------------------------------------------ */
  menu: [
    { rotulo: 'Início', href: '#inicio' },
    { rotulo: 'Sobre', href: '#sobre' },
    { rotulo: 'Atendimento', href: '#atendimento' },
    { rotulo: 'Contato', href: '#contato' },
  ],

  /* ------------------------------------------------------------------
     5. HERO (primeira dobra)
     ------------------------------------------------------------------ */
  hero: {
    selo: 'Atendimento online e presencial',
    titulo: 'Psicoterapia para uma vida com mais equilíbrio',
    texto:
      'Um espaço reservado para você falar sem pressa, ser ouvida com atenção e encontrar novas formas de olhar para aquilo que hoje pesa.',
    botaoPrimario: 'Agendar uma conversa',
    botaoSecundario: 'Conheça meu trabalho',
    // Pequena assinatura sob a foto:
    legendaFoto: 'Marina Vasconcelos', // [SUBSTITUIR]
    legendaFotoApoio: 'Psicóloga · CRP 06/123456', // [SUBSTITUIR]
  },

  /* ------------------------------------------------------------------
     6. SECAO "UM ESPACO PARA VOCE"
     ------------------------------------------------------------------ */
  espaco: {
    sobretitulo: 'Um espaço para você',
    titulo: 'Nem sempre precisamos encontrar todas as respostas sozinhos.',
    paragrafos: [
      'A psicoterapia oferece um lugar seguro e sem julgamentos para colocar em palavras o que muitas vezes não cabe na conversa do dia a dia.',
      'É nesse encontro, feito de escuta e de tempo, que sentimentos começam a fazer sentido, padrões se tornam visíveis e novas escolhas passam a ser possíveis.',
    ],
    // Pequenos destaques ao lado do texto (maximo 3, mantenha curtos):
    destaques: [
      'Escuta sem julgamentos',
      'Sigilo profissional garantido',
      'Seu tempo, no seu ritmo',
    ],
  },

  /* ------------------------------------------------------------------
     7. SECAO "COMO POSSO AJUDAR"
     ------------------------------------------------------------------
     icone: nome de um icone da biblioteca lucide-react.
     Opcoes ja disponiveis: 'ondas' | 'bussola' | 'pessoas' | 'folha'
     (o mapeamento fica em src/components/ComoPossoAjudar.jsx)
     ------------------------------------------------------------------ */
  areas: {
    sobretitulo: 'Como posso ajudar',
    titulo: 'Alguns caminhos que podemos percorrer juntas',
    itens: [
      {
        icone: 'ondas',
        titulo: 'Ansiedade e estresse',
        texto:
          'Compreender o que dispara a preocupação constante e construir formas mais leves de atravessar os dias.',
      },
      {
        icone: 'bussola',
        titulo: 'Autoconhecimento',
        texto:
          'Reconhecer padrões, entender suas próprias reações e se aproximar de quem você realmente é.',
      },
      {
        icone: 'pessoas',
        titulo: 'Relacionamentos',
        texto:
          'Cuidar dos vínculos afetivos, familiares e de trabalho, e aprender a colocar limites com clareza.',
      },
      {
        icone: 'folha',
        titulo: 'Momentos de mudança',
        texto:
          'Encontrar apoio em transições, lutos e recomeços, quando o chão parece menos firme do que antes.',
      },
    ],
  },

  /* ------------------------------------------------------------------
     8. SECAO "SOBRE MIM"               [SUBSTITUIR - texto ficticio]
     ------------------------------------------------------------------ */
  sobre: {
    sobretitulo: 'Sobre mim',
    titulo:
      'Acredito na terapia como um espaço de escuta, acolhimento e construção de novas perspectivas.',
    paragrafos: [
      'Sou psicóloga clínica e atendo adultos que buscam compreender melhor a própria história. Meu trabalho parte da ideia de que ninguém precisa chegar pronto à terapia: o processo se constrói no encontro, no ritmo de cada pessoa.',
      'Ao longo dos anos, tenho acompanhado pessoas em questões ligadas à ansiedade, a relacionamentos e a momentos de transição. O que se mantém em todos os casos é o cuidado com o vínculo e o respeito ao tempo de cada um.',
    ],
    // Ficha profissional — cada item vira uma linha na lateral.
    ficha: [
      { rotulo: 'Nome', valor: 'Marina Vasconcelos' },
      { rotulo: 'Registro', valor: 'CRP 06/123456' },
      { rotulo: 'Formação', valor: 'Psicologia — Universidade Federal (2014)' },
      { rotulo: 'Especialização', valor: 'Clínica psicanalítica — Instituto de Psicologia' },
      { rotulo: 'Abordagem', valor: 'Psicanálise contemporânea' },
    ],
  },

  /* ------------------------------------------------------------------
     9. SECAO "COMO FUNCIONA"
     ------------------------------------------------------------------ */
  processo: {
    sobretitulo: 'Como funciona',
    titulo: 'Do primeiro contato ao início do acompanhamento',
    passos: [
      {
        numero: '01',
        titulo: 'Primeiro contato',
        texto:
          'Entre em contato pelo WhatsApp para conversarmos sobre suas necessidades.',
      },
      {
        numero: '02',
        titulo: 'Conversa inicial',
        texto: 'Entendemos juntos o que você está buscando na terapia.',
      },
      {
        numero: '03',
        titulo: 'Início do acompanhamento',
        texto: 'Definimos os próximos passos de acordo com suas necessidades.',
      },
    ],
  },

  /* ------------------------------------------------------------------
     10. SECAO "ATENDIMENTO"            [SUBSTITUIR - dados ficticios]
     ------------------------------------------------------------------ */
  atendimento: {
    sobretitulo: 'Atendimento',
    titulo: 'Atendimento presencial e online',
    texto:
      'As sessões acontecem semanalmente, com duração de 50 minutos. Você pode escolher o formato que faz mais sentido para a sua rotina.',
    presencial: {
      titulo: 'No consultório',
      // [SUBSTITUIR] endereco ficticio
      endereco: 'Rua das Acácias, 128 — Sala 704',
      bairro: 'Pinheiros',
      cidade: 'São Paulo — SP',
      detalhe: 'Edifício com acessibilidade e estacionamento no local.',
    },
    online: {
      titulo: 'Por videochamada',
      texto:
        'Atendimento online para todo o Brasil e para brasileiros no exterior, em plataforma segura e com o mesmo sigilo do encontro presencial.',
      detalhe: 'Basta um ambiente reservado e uma boa conexão de internet.',
    },
    horarios: 'Segunda a sexta, das 8h às 20h',
  },

  /* ------------------------------------------------------------------
     11. GOOGLE MAPS
     ------------------------------------------------------------------
     >>> ALTERE APENAS A LINHA ABAIXO PARA TROCAR O MAPA. <<<

     Coloque o endereco exatamente como voce escreveria na busca do
     Google Maps. O link do mapa e montado automaticamente.

     Exemplo: 'Av. Paulista, 1000, Bela Vista, São Paulo - SP'
     ------------------------------------------------------------------ */
  GOOGLE_MAPS_LOCATION: 'Rua dos Pinheiros, 128, Pinheiros, São Paulo - SP',

  /* ------------------------------------------------------------------
     12. CHAMADA FINAL
     ------------------------------------------------------------------ */
  chamadaFinal: {
    titulo: 'Talvez o primeiro passo seja simplesmente conversar.',
    texto:
      'Sem compromisso e sem pressa. Me conte o que está acontecendo e vemos juntos se faz sentido começarmos.',
    botao: 'Agendar pelo WhatsApp',
    apoio: 'Costumo responder em até 24 horas, em dias úteis.',
  },

  /* ------------------------------------------------------------------
     13. RODAPE
     ------------------------------------------------------------------ */
  rodape: {
    copyright: '© 2026 — Todos os direitos reservados.',
    // Aviso opcional. Deixe string vazia ('') para nao exibir.
    aviso: 'Este site não realiza atendimentos de urgência. Em caso de crise, ligue 188 (CVV).',
  },
};

export default siteConfig;
