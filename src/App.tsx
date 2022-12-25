import React from 'react';

import { NavBar } from './components/NavBar';
import { Projects } from './components/Portfolio';
import { About } from './components/About';
import { Works } from './components/Works';
import { Tecnologies } from './components/Technologies';
import { Degree } from './components/Degree';
import { Appointment } from './components/Contact';
import { Footer } from './components/Footer';
import { Call } from './components/Header';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Call />
      <Projects />
      <About />
      <Works />
      <Tecnologies />
      <Degree />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
