import logo from './logo.svg';
import './App.css';
import Homecreate from './body/Homecreate';
import Navbar from './header/Navbar';
import Bagcart from './body/Bagcart';
import lipGlos from './mapping/Lip';
import creamLiqued from './mapping/Cream';
import blushSkin from './mapping/Blush';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Bagpage from './body/Bagpage';
import Footerpage from './footer/Footerpage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Homecreate/>}/>
        <Route path='/lip' element={<Bagcart data={lipGlos}/>}/>
        <Route path='/cream' element={<Bagcart data={creamLiqued}/>}/>
        <Route path='/blush' element={<Bagcart data={blushSkin}/>}/>
        <Route path='/cart' element={<Bagpage/>}/>
      </Routes>
      <Footerpage/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
