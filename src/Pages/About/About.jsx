import { useTranslation } from 'react-i18next';
import '../../CSS/About.css';
import imageDiplome from '../../assets/diplome.png';
import Education from '../../components/Education/Education'
import Contact from '../../components/Contact/Contact';
import Prix from '../../components/Prix/Prix';
import Haute from '../../components/Haute/Haute';
import AboutPage from '../../components/AboutPage/AboutPage';

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
                            <p className='first-about-aboutpage'>{t('diplome.firstabout')}</p>
                        </div>
                        <img src={imageDiplome} alt="Description de l'image" className="image-after-text" />
                    </div>

                    <div className="content-diplome-plus">
                        <div className="diplome-subtitle-plus">
                            <h4>{t('diplome.subtitleplus')}</h4>
                        </div>
                         <Education />
                    </div>

                    <Prix />
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default About;
