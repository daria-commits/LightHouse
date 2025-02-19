import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact/Contact';
import '../CSS/narrativeTherapie.css';
import image from '../assets/640.jpg'

function Narrativetherapy() {
  const { t } = useTranslation('global'); 

  return (
    <>
      <div className="haute-section-narrativetherapie">
        <div className="narrativetherapie-section">
          <h1>NARRATIVE THERAPY</h1>
          <img src={image} alt="Narrative Therapy" className="image-narrative-therapy" />
        </div>
      </div>
      <div className='texte-narrative-therapy'>
        <p className='texte-narrative-therapy'>{t('narrativetheraphie.textenarrative')}</p>
       
      </div>

      <Contact />
    </>
  );
}

export default Narrativetherapy;
