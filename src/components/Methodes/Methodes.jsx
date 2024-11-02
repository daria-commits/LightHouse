import React, { useState } from 'react';
import { Card, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Methodes.css';

function Methodes() {
    const [activeTab, setActiveTab] = useState('#first');
    const navigate = useNavigate();
    const { t } = useTranslation('global');

    const renderCardBody = () => {
        switch (activeTab) {
            case '#first':
                return (
                    <>
                        <Card.Title className="Card-Title">{t('first.title')}</Card.Title>
                        <Card.Text className='Card-Text'>{t('first.content')}</Card.Text>
                        <Button className="Button" onClick={() => navigate('/narrativetherapy')}>{t('first.button')}</Button>
                    </>
                );
            case '#second':
                return (
                    <>
                        <Card.Title className="Card-Title">{t('second.title')}</Card.Title>
                        <Card.Text>{t('second.content')}</Card.Text>
                        <Button className="Button" onClick={() => navigate('/externalization')}>{t('second.button')}</Button>
                    </>
                );
            case '#third':
                return (
                    <>
                        <Card.Title className="Card-Title">{t('third.title')}</Card.Title>
                        <Card.Text>{t('third.content')}</Card.Text>
                        <Button className="Button" onClick={() => navigate('/writtenpractices')}>{t('third.button')}</Button>
                    </>
                );
            case '#four':
                return (
                    <>
                        <Card.Title className="Card-Title">{t('four.title')}</Card.Title>
                        <Card.Text>{t('four.content')}</Card.Text>
                        <Button className="Button" onClick={() => navigate('/arttherapy')}>{t('four.button')}</Button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Container className="my-custom-container">
             <h3 className="section-title">{t('methods.title')}</h3>
            <Card className="Card">
                <Card.Header>
                    <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedTab) => setActiveTab(selectedTab)}>
                        <Nav.Item>
                            <Nav.Link href="#" eventKey="#first">{t('first.tab')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#n" eventKey="#second">{t('second.tab')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" eventKey="#third">{t('third.tab')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#four" eventKey="#four">{t('four.tab')}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body className="Card-Body">
                    {renderCardBody()}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Methodes;
