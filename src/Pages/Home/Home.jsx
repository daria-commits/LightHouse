
import Hero from '../../components/Hero/Hero';

import Contact from '../../components/Contact/Contact';
import Prix from '../../components/Prix/Prix';
import AboutDeux from '../../components/AboutDeux/AboutDeux';

import { Container } from 'react-bootstrap';
import Cards from '../../components/MethodesCards/Cards';


const HomePage = () => {
  

  return (
    <div className="full-width">
      
      <Hero />
        
     <AboutDeux className='about-deux' />
     <Container className="my-5"></Container> {/* Utilise la classe Bootstrap pour l'espacement vertical */}

     <Cards className='cards' />

     <Prix className='prix' />

   <Contact className='contact' />
    
 
 
   </div>
  );
};

export default HomePage;
