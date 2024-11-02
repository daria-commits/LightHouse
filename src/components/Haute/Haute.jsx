import './Haute.css'
import { useTranslation } from 'react-i18next';
export default function Haute() {
    const { t } = useTranslation('global');
  return (
    <div className="haut-section">
    <div className="container">
   
    <div className="text">
      <div className="textun">
        <span>{t('aboutpage.phrase')}</span>
      </div>
      <div className="textdeux">
        <span>{t('aboutpage.phrasedeux')}</span>
      </div>
    </div>
  </div>
  </div>
  )
}
