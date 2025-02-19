
import Hero from '../../components/Hero/Hero';

import Contact from '../../components/Contact/Contact';
import Prix from '../../components/Prix/Prix';
import AboutDeux from '../../components/AboutDeux/AboutDeux';

import { Container } from 'react-bootstrap';

import Methodes from '../../components/Methodes/Methodes';


const HomePage = () => {

 
  return (
    <div className="full-width">
      
      <Hero />
   <AboutDeux />
    
     <Container className="my-5"></Container> 

     <Methodes className='cards' />

     <Prix className='prix' />

   <Contact className='contact' />
    
 
 
   </div>
  );
};

export default HomePage;
