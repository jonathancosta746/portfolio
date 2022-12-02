import React from 'react';

import { Home } from './pages/Home/Home'
import { About } from './components/About'
import { Works } from './components/Works';
import { Tecnologies } from './components/Technologies';
import { Degree } from './components/Degree';
import { Appointment } from './components/appointment';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Home />
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
