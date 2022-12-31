//React Router Dom
import {  BrowserRouter, Routes, Route  } from 'react-router-dom';

//Pages
import { Home } from './pages/Home/Home';
import { ProjectDetail } from './pages/ProjectDetail';

//Component
import { NavBar } from './components/NavBar';

import { DataContextProvider } from './components/ContextData/DataContext';


function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<Home />}/>

              <Route path="/project/:id/info" element={<ProjectDetail />}/>
            </Routes>
       </BrowserRouter>
      </DataContextProvider>


      
    </div>
  );
}

export default App;
