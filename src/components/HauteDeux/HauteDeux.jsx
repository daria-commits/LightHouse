import './HauteDeux.css';
import { useTranslation } from 'react-i18next';
function HauteDeux() {
    
    const { t } = useTranslation('global');

  return (
    <div className="haut-section-deux">
    <div className="container-haut">
   
    <div className="text-deux">
      <div className="textun-deux">
        <span>{t('aboutpagedeux.phraseun')}</span>
      </div>
      <div className="textdeux">
        <span>{t('aboutpagedeux.phrasedeuxdeux')}</span>
      </div>
    </div>
  </div>
  </div>
  )
}

export default HauteDeux