
import Figure from 'react-bootstrap/Figure';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../assets/masha-diplome.jpg';
import { useTranslation } from 'react-i18next';
import './AboutPage.css'
function AboutPage() {
   const { t } = useTranslation('global');

   return (
      <Container className="mt-4">
         <Row className="align-items-center">

            <Col md={6}>
               <div className="about-title">
                  <h3>{t('titreabout.aboutpage')}</h3>
               </div>
               <div className="content-about">
                  <div className="texte-about">
                     <p className='page-text-about'>{t('texteabout.firstabout')}</p>
                  </div>
                  <hr />
               </div>
            </Col>

            <Col md={6} className="text-center">
               <Figure>
                  <Figure.Image 
                     src={image}
                     width={300}  
                     height="auto"
                     alt="Masha Diplôme"
                     className="img-fluid"
                  />
               </Figure>
            </Col>
         </Row>
      </Container>
   );
}

export default AboutPage;
