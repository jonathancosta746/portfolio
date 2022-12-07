import React from 'react';

import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Works } from './components/Works';
import { Tecnologies } from './components/Technologies';
import { Degree } from './components/Degree';
import { Appointment } from './components/appointment';
import { Footer } from './components/footer';
import { Call } from './components/Call';



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
