import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import global_en from './translations/en/global.json';
import global_ru from './translations/ru/global.json';
import global_fr from './translations/fr/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialisation de i18next avec LanguageDetector
i18next.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  resources: {
    en: { global: global_en },
    fr: { global: global_fr },
    ru: { global: global_ru },
  },
  fallbackLng: 'fr', // Langue par défaut si aucune langue n'est détectée
});

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
