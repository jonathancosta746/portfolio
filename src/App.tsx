
import { NavBar } from './components/NavBar';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Works } from './components/Works';
import { Tecnologies } from './components/Technologies';
import { Degree } from './components/Degree';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Portfolio />
      <About />
      <Works />
      <Tecnologies />
      <Degree />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
