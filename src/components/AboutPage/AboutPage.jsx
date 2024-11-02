import React from 'react';
import imageAbout from '../../assets/mashaAbout.jpg';
import { useTranslation } from 'react-i18next';
import './AboutPage.css';

export default function AboutPage() {
    const { t } = useTranslation('global');

    return (
      <>
        <div className="section-about">
        
            <div className="about-page">
                <div className="gauche-about">
                    <img src={imageAbout} className='image-about' alt="About" />
                </div>
                <div className="droite-about">
                    <div className="about-title">
                        <h3>{t('titreabout.aboutpage')}</h3>
                    </div>
                    <div className="content-about">
                        <div className="texte-about">
                            <p>{t('texteabout.firstabout')}</p>
                        </div>
                        <hr />
                    </div>
                   
                </div>
                
            </div>
            
        </div>
        <div className="container">
        <div className="texte-deux">
                    {t('textedeux.textedeux')}
                </div>
                </div>
                </>
      
    );
}
