
import { Portfolio } from '../../components/Portfolio';
import { About } from '../../components/About';
import { Works } from '../../components/Works';
import { Tecnologies } from '../../components/Technologies';
import { Degree } from '../../components/Degree';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ScrollUp } from '../../components/ScrollUp';


export const Home = () => {
  return (
    <>
      <Header />
      <ScrollUp />
      <Portfolio />
      <About />
      <Works />
      <Tecnologies />
      <Degree />
      <Contact />
      <Footer />
    </>
  )
}