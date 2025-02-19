import '../CSS/writtenpractices.css';
import Contact from '../components/Contact/Contact';
import { useTranslation } from 'react-i18next';
function Writtenpractices() {
  const { t } = useTranslation('global'); 
  return (
    <>
    <div className="haute-section-written-practicies">
      <div className="written-practices-section">
      <h1>WRITTEN PRACTICES</h1>
    </div>
    </div>
   <div className='texte-narrative-therapy'>
        <p className='texte-narrative-therapy'>{t('writtenpracticies.textwritten')}</p>
      </div>
    <Contact />
  </>
  )
}

export default Writtenpractices