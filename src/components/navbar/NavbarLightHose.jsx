import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { MdLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo-png.png';
import './navbar.css';
import { useEffect, useState } from 'react';

export default function NavbarLightHose() {
  const { i18n, t } = useTranslation('global');
  const [language, setLanguage] = useState(i18n.language);
  const [menus, setMenus] = useState([]);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang)
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch('/items/menus?fields=*,*.*.*', {
      headers: { Authorization: 'Bearer lSEDTtfWDOtvaRgkPHOnPWn0lfnHFwHU' },
    });
    const { data } = await response.json();
    setMenus(data);
    console.log(data)
  };
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <img src={logo} alt="Logo" width="120" height="30" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="mx-auto">
            {menus.map((oneMenu) => {
              return (
                oneMenu.type_menu.includes("menu") ? (
                  (oneMenu.menus_menus.length ? (
                    <NavDropdown title={t('dropdown')} id="basic-nav-dropdown">
                     {oneMenu.menus_menus.map(
                      (submenu,index) =>  ( <NavDropdown.Item key={`${submenu.related_menus_id.id}-${index}`}href={submenu.related_menus_id[`link`]}>{submenu.related_menus_id[`label_${language}`]}</NavDropdown.Item>)
                     )}
                     

                      
                    </NavDropdown>
                  ) : (<Nav.Link key={oneMenu.id} href={oneMenu.link}>
                    {oneMenu[`label_${language}`]} {language}
                  </Nav.Link>))
                ) : null
              )

            })}
            <Nav.Link href="/">{t('home')}</Nav.Link>
            <Nav.Link href="/about">{t('about')}</Nav.Link>


            

            <Nav.Link href="#contact" className='nav-link'>{t('translation.contactUs')}</Nav.Link>
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