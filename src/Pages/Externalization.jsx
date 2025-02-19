import { useTranslation } from 'react-i18next';
import Contact from '../components/Contact/Contact';
import '../CSS/externalization.css';

function Externalization() {
  const { t } = useTranslation('global');  
  return (
    <>
    <div className="haute-section-externalization">
        <div className="externalization-section">
          <h1>EXTERNALISATION DU PROBLÈME</h1>
        </div>
      </div>
      <div className='texte-externalization'>
        <p className='texte-externalization'>{t('externalization.text')}</p>
      </div>
    <Contact />
    </>
  )
}

export default Externalization