import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { MdLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo-png.png';
import './navbar.css';

export default function NavbarLightHose() {
  const { i18n, t } = useTranslation('global');

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <img src={logo} alt="Logo" width="120" height="30" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="mx-auto">
            <Nav.Link href="/">{t('home')}</Nav.Link>
            <Nav.Link href="/about">{t('about')}</Nav.Link>
           
            
            <NavDropdown title={t('dropdown')} id="basic-nav-dropdown">
              <NavDropdown.Item href="/narrativetherapy">{t('action')}</NavDropdown.Item>
              <NavDropdown.Item href="/externalization">{t('another_action')}</NavDropdown.Item>
              <NavDropdown.Item href="/writtenpractices">{t('something')}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/arttherapy">{t('separated_link')}</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact"className='nav-link'>{t('translation.contactUs')}</Nav.Link>
          </Nav>
          
          <Nav className="ml-auto d-flex align-items-center">
            <NavDropdown
              title={<MdLanguage style={{ fontSize: '20px', color: '#8C6C5A' }} />}
              id="language-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item
                onClick={() => handleChangeLanguage('fr')}
                active={i18n.language === 'fr'}
                className="dropdown-item-custom" 
              >
                Français
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleChangeLanguage('en')}
                active={i18n.language === 'en'}
                className="dropdown-item-custom" 
              >
                English
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => handleChangeLanguage('ru')}
                active={i18n.language === 'ru'}
                className="dropdown-item-custom" 
              >
                Русский
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
