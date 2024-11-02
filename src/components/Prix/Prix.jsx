import React from 'react';
import './Prix.css';
import { useTranslation } from 'react-i18next';

function Prix() {
    const { t } = useTranslation('global');
  
    return (
        <div className='prix'>
             <h2 className='zagolovok'>{t('prix.zagolovok')}</h2>
            <div className="ramka-prix">
                <div className="contenue">
                   
                    <h3 className='prix-title'>{t('prix.title')}</h3>
                    <h2 className='prix-prix'>{t('prix.prix')}</h2>
                    <p className='prix-p'>{t('p.prix')}</p>
                </div>
            </div>
        </div>
    );
}

export default Prix;
