import Header from './components/Header';
import Hero from './components/Hero';
import EspacoParaVoce from './components/EspacoParaVoce';
import ComoPossoAjudar from './components/ComoPossoAjudar';
import Sobre from './components/Sobre';
import ComoFunciona from './components/ComoFunciona';
import Atendimento from './components/Atendimento';
import ChamadaFinal from './components/ChamadaFinal';
import Footer from './components/Footer';
import BotaoWhatsApp from './components/BotaoWhatsApp';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <EspacoParaVoce />
        <ComoPossoAjudar />
        <Sobre />
        <ComoFunciona />
        <Atendimento />
        <ChamadaFinal />
      </main>

      <Footer />
      <BotaoWhatsApp />
    </>
  );
}
