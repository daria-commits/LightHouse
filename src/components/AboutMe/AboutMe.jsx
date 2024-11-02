import React from 'react';
import Image from 'react-bootstrap/Image';
import { AiTwotoneEdit } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import imageAbout from '../../assets/masha.jpg'; 
import './aboutMe.css';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal'; // Import du modal

function AboutMe() {
    const { t } = useTranslation('global');
    const [modalShow, setModalShow] = React.useState(false); // Gestion d'état pour le modal
    const handleSaveChanges = () => {
      // Ajoutez ici la logique pour sauvegarder les changements
      console.log("Changes saved!");
      setModalShow(false); // Fermer le modal après avoir sauvegardé les changements
  };
    return (
      <div className="container-about">
        
          {/* Colonne pour le texte */}
          <div className="text-about">
            <h3 className='title-about'>{t('titre.about')}</h3>
            <p className='sub-title'>{t('subtitre.subtitle')}</p>
            
            <AiTwotoneEdit className='fleche-first' />
            <p className='first'>{t('texte.first')}</p>

            <AiTwotoneEdit className='fleche-second' />
            <p className='second'>{t('texte.second')}</p>

            <AiTwotoneEdit className='fleche-third' />
            <p className='third'>{t('texte.third')}</p>

            <AiTwotoneEdit className='fleche-four' />
            <p className='four'>{t('texte.four')}</p>

            <div className="primary-secondary-container">
              <Button variant="primary" size="lg" className='primary' onClick={() => setModalShow(true)}>
                {t('button.rdv')}
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSave={handleSaveChanges}  // Passer handleSaveChanges comme prop
              />
              <Button variant="secondary" size="lg" className='secondary'>
                {t('button.about')}
              </Button>
            </div>
          </div>
          
          {/* Colonne pour l'image */}
          <div className="image-container">
            <Image src={imageAbout} className='image-about' />
            <div className='carre-about'></div> {/* Le carré est à l'intérieur du conteneur d'image */}
          </div>
        </div>
    );
}

export default AboutMe;
