import React from 'react';

import { Home } from './pages/Home/Home'
import { About } from './components/About'
import { Works } from './components/Works';
import { Tecnologies } from './components/Technologies';
import { Degree } from './components/Degree';
import { Appointment } from './components/appointment';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Works />
      <Tecnologies />
      <Degree />
      <Appointment />
    </div>
  );
}

export default App;
