import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import NavbarLightHouse from './components/navbar/NavbarLightHose'
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import Narrativetherapy from './Pages/Narrativetherapy';
import Writtenpractices from './Pages/Writtenpractices';
import Arttherapy from './Pages/Arttherapy';
import Externalization from './Pages/Externalization';






function App() {
 
return (
    <>
      <NavbarLightHouse className='navbar-custom' />
      <Routes>
        <Route  path='/' element = {<Home />}/>
        <Route  path='/about' element = {< About/>}/>
      
        <Route  path='/narrativetherapy' element = {< Narrativetherapy/>}/>
      
        <Route path='/writtenpractices' element={<Writtenpractices />} /> {/* Nouvelle route */}
        <Route path='/arttherapy' element={<Arttherapy />} /> {/* Nouvelle route */}
        <Route path='/externalization' element={<Externalization />} /> {/* Nouvelle route */}
      </Routes>
      <Footer />
   </>
  )
}

export default App
