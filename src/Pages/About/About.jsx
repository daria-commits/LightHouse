import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../CSS/About.css';
import Haute from '../../components/Haute/Haute';
import AboutPage from '../../components/AboutPage/AboutPage';
import imageDiplome from '../../assets/diplome.png';
import Accordion from 'react-bootstrap/Accordion';
import Contact from '../../components/Contact/Contact';
import Prix from '../../components/Prix/Prix'
function About() {
    const { t } = useTranslation('global');

    return (
        <>
            <Haute />
            <AboutPage />
            
            <div className="droite-diplome">
                <div className="container">
                    <div className="diplome-about">
                        <h3 className='title-about-page'>{t('diplome.about')}</h3>
                    </div>
                    <div className="content-diplome">
                        <div className="diplome-subtitle">
                            <h4>{t('diplome.subtitle')}</h4>
                        </div>
                        <div className="texte-about">
                            <p>{t('diplome.firstabout')}</p>
                        </div>
                        <img src={imageDiplome} alt="Description de l'image" className="image-after-text" />
                    </div>

                    <div className="content-diplome-plus">
                        <div className="diplome-subtitle-plus">
                            <h4>{t('diplome.subtitleplus')}</h4>
                        </div>
                        {/* Ajoutez le contenu associé au nouveau sous-titre ici */}
                        <div className="texte-about-plus">
                            <p>{t('diplome.firstaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitle1')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>{t('diplome.accordionTitle2')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image2.jpg" alt="Description de l'image 2" className="accordion-image" />
     
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>{t('diplome.accordionTitle3')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image3.jpg" alt="Description de l'image 3" className="accordion-image" />
     
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

                        </div>


                        <div className="texte-about-plus">
                            <p>{t('diplome.secondeaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitleseonde')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>

                        </div>

                        <div className="texte-about-plus">
                            <p>{t('diplome.thirdaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitlethird')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>

                    <div className="texte-about-plus">
                            <p>{t('diplome.forthabout')} </p>
                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitleforth')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>


                    <div className="texte-about-plus">
                            <p>{t('diplome.fifthaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitlefifth')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>

                    <div className="texte-about-plus">
                            <p>{t('diplome.sixaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitlesix')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>

                    <div className="texte-about-plus">
                            <p>{t('diplome.sevenaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitleseven')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>

                    <div className="texte-about-plus">
                            <p>{t('diplome.eightaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitleeight')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>

                    <div className="texte-about-plus">
                            <p>{t('diplome.nineaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitlenine')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>

                    <div className="texte-about-plus">
                            <p>{t('diplome.tenaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitleten')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>

                    <div className="texte-about-plus">
                            <p>{t('diplome.elevenaboutplus')}</p> {/* Remplacez par la traduction appropriée */}

                            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>{t('diplome.accordionTitleleven')}</Accordion.Header>
    <Accordion.Body>
      <img src="path/to/your/image1.jpg" alt="Description de l'image 1" className="accordion-image" />
   
   </Accordion.Body>
  </Accordion.Item>
</Accordion>
                    </div>


                   
                    </div>

                  
</div>

<Prix />

<Contact />
                </div>
        


            </>
      
    );
}

export default About;
