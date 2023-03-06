import Banner from './Components/Banner';
import Companies from './Components/Companies';
import Dream from './Components/Dream';
import Ecosyctem from './Components/Ecosyctem';
import Header from './Components/Header';
import Records from './Components/Records';
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
      </main>
    </div>
  );
}

export default App;
