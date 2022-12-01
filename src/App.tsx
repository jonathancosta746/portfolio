import React from 'react';

import { Home } from './pages/Home/Home'
import { About } from './components/About'
import { Works } from './components/Works';
import { Tecnologies } from './components/Technologies';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Works />
      <Tecnologies />
    </div>
  );
}

export default App;
