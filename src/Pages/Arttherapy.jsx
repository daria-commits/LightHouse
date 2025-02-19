import Contact from "../components/Contact/Contact";
import "../CSS/Arttherapie.css"; // Assurez-vous que le chemin est correct
import { useTranslation } from 'react-i18next';
function Arttherapy() {
    const { t } = useTranslation('global');  
  return (
    <>
      <div className="haute-section-arttherapie">
        <div className="arttherapie-section">
        <h1>ART THERAPIE</h1>
      </div>
      </div>
      <div className='texte-narrative-therapy'>
        <p className='texte-art-therapy'>{t('arttheraphie.texteart')}</p>
        </div>
      <Contact />
    </>
  );
}

export default Arttherapy;
