
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Import Link de React Router
import logo from '../../assets/logo-transparent-png.png'; // Assurez-vous de bien mettre le chemin vers le fichier logo
import './Footer.css';
import { LiaFacebookMessenger } from "react-icons/lia";
import { BiLogoWhatsapp } from "react-icons/bi";
import { PiPhoneCallLight } from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { PiTelegramLogoThin } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
export default function Footer() {
    const { t } = useTranslation('global');

   

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          {/* Section du logo */}
          <div className="col-sm-12 col-md-6">
            <img src={logo} alt="Logo" width="200" height="40" />
            <p className="text-justify">
              {t('footer.description')}
            </p>
          </div>

          {/* Section liens utils */}
          <div className="col-xs-6 col-md-3">
            <h6>{t('footer.categories')}</h6>
            <ul className="footer-links">
              <li><Link to="/">{t('footer.links.c')}</Link></li>
              <li><Link to="/about">{t('footer.links.uiDesign')}</Link></li>
              <li><Link to="/services">{t('footer.links.php')}</Link></li>
              <li><Link to="/">{t('footer.links.java')}</Link></li>
              
            </ul>
          </div>

          {/* contacts */}
         {/* contacts */}
<div className="col-xs-6 col-md-3">
  <h6>{t('footer.quickLinks')}</h6>
  <ul className="footer-links">
    <li>
    <PiPhoneCallLight className="icon-spacing" />
      <a href="tel:+1234567890">+33000000000
    

        </a> {/* Remplacez par votre numéro de téléphone */}
    </li>
    <li>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <BiLogoWhatsapp className="icon-spacing" />
      </a>
      <span>WhatsApp</span>
    </li>
    <li>
      <a href="https://m.me/username" target="_blank" rel="noopener noreferrer">
      <LiaFacebookMessenger className="icon-spacing"/>
      </a>
      <span>Messenger</span>
    </li>
    <li>
      <Link to="/privacy-policy">{t('footer.links.privacy')}</Link>
    </li>
  </ul>
</div>

        </div>
        <hr />
      </div>

      {/* Section inférieure */}
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              {t('footer.copyright')} 
              <Link to="/"> Daria Bauer</Link>.
            </p>
          </div>

          
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/maria.velikanova.7?locale=fr_FR"><FiFacebook /></a></li>
              <li><a className="twitter" href="#"><PiTelegramLogoThin /></a></li>
              <li><a className="instagram" href="#"><PiInstagramLogoThin /></a></li>
              <li><a className="linkedin" href="#"><SlSocialLinkedin /></a></li>   
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
