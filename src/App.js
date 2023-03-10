import Banner from './Components/Banner';
import Carousel from './Components/Carousel';
import Companies from './Components/Companies';
import Diversity from './Components/Diversity';
import Dream from './Components/Dream';
import Ecosyctem from './Components/Ecosyctem';
import Faq from './Components/Faq';
import Focused from './Components/Focused';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Records from './Components/Records';
import Recruit from './Components/Recruit';
import Shining from './Components/Shining';
import Speak from './Components/Speak';
import './index.css'

function App() {
  return (
    <div className="main">
      <main>
        <Header />
        <Banner />
        <Ecosyctem />
        <Companies />
        <Records />
        <Dream />
        <Shining />
        <Focused />
        <Speak />
        <Diversity />
        <Recruit />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

export default App;
