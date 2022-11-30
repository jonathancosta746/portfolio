import React from 'react';

import { Home } from './pages/Home/Home'
import { About } from './components/About'
import { Jobs } from './components/Jobs';
import { Tecnologies } from './components/Technologies';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Jobs />
      <Tecnologies />
    </div>
  );
}

export default App;
