import React from 'react';
import './AboutDeux.css';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import imageAbout from '../../assets/aboutme.jpg';
import { FiFacebook } from "react-icons/fi";
import { PiInstagramLogoThin, PiTelegramLogoThin } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TiInputChecked } from "react-icons/ti";

function AboutDeux() {
  const { t } = useTranslation('global');
  const [modalShow, setModalShow] = React.useState(false);

  const handleSaveChanges = () => {
    // Ajoutez ici la logique pour sauvegarder les changements
    console.log("Changes saved!");
    setModalShow(false); // Fermer le modal après avoir sauvegardé les changements
};
  return (
    <div className="section">
      <div className="container">
        <div className="title">
          <h3>{t('titre.about')}</h3>
        </div>

        <div className="content">
          <div className="article">
            <h4>{t('subtitre.subtitle')}</h4>

            <div className="text-content">
              <div className="text-line">
                <TiInputChecked  className='fleche-first' />
                <p className='first'>{t('texte.first')}</p>
              </div>
              <div className="text-line">
                <TiInputChecked className='fleche-second' />
                <p className='second'>{t('texte.second')}</p>
              </div>
              <div className="text-line">
                <TiInputChecked className='fleche-third' />
                <p className='third'>{t('texte.third')}</p>
              </div>
              <div className="text-line">
                <TiInputChecked className='fleche-four' />
                <p className='four'>{t('texte.four')}</p>
              </div>
            </div>

            <div className="primary-secondary-container">
              <Button variant="primary" size="lg" className='primary' onClick={() => setModalShow(true)}>
                {t('button.rdv')}
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSave={handleSaveChanges}
              />
              <Link to="/about">
  <Button variant="secondary" size="lg" className='secondary'>
    {t('button.about')}
  </Button>
</Link>
            </div>
          </div>
        </div>

        <div className="image-section">
          <Image src={imageAbout} className='image-about' thumbnail />
        </div>

        <div className="social">




            <a className="facebook" href="https://www.facebook.com/maria.velikanova.7?locale=fr_FR"><FiFacebook /></a>
              <a className="twitter" href="#"><PiTelegramLogoThin /></a>
              <a className="instagram" href="#"><PiInstagramLogoThin /></a>
            <a className="linkedin" href="#"><SlSocialLinkedin /></a> 


          
        </div>
      </div>
    </div>
  );
}

export default AboutDeux;
