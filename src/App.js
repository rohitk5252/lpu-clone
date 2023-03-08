import Banner from './Components/Banner';
import Companies from './Components/Companies';
import Diversity from './Components/Diversity';
import Dream from './Components/Dream';
import Ecosyctem from './Components/Ecosyctem';
import Focused from './Components/Focused';
import Header from './Components/Header';
import Records from './Components/Records';
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
      </main>
    </div>
  );
}

export default App;
