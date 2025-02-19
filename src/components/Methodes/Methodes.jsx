import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import imageUn from '../../assets/pen.jpg'
import imageDeux from '../../assets/brushes.jpg'
import imageTrois from '../../assets/write.jpg'
import imageQuatre from '../../assets/writer-deux.jpg'
import './Methodes.css'
function Methodes() {
    const navigate = useNavigate();
    const { t } = useTranslation('global');

    return (
        <Container className="mt-4">
             <h3 className="section-title">{t('methodes.title')}</h3>
            <Row className="g-4">
                <Col md={6} lg={6}>
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={imageUn} />
                        <Card.Body>
                            <Card.Title>{t('first.title')}</Card.Title>
                            <Card.Text>{t('first.content')}</Card.Text>
                            <Button className = "primary-method" variant="primary" onClick={() => navigate('/narrativetherapy')}>
                                {t('first.button')}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={6}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={imageQuatre} />
                        <Card.Body>
                            <Card.Title>{t('second.title')}</Card.Title>
                            <Card.Text>{t('second.content')}</Card.Text>
                            <Button className = "primary-method" variant="primary" onClick={() => navigate('/externalization')}>
                                {t('second.button')}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={6}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={imageTrois} />
                        <Card.Body>
                            <Card.Title>{t('third.title')}</Card.Title>
                            <Card.Text>{t('third.content')}</Card.Text>
                            <Button className = "primary-method" variant="primary" onClick={() => navigate('/writtenpractices')}>
                                {t('third.button')}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={6}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={imageDeux} />
                        <Card.Body>
                            <Card.Title>{t('four.title')}</Card.Title>
                            <Card.Text>{t('four.content')}</Card.Text>
                            <Button className = "primary-method"  variant="primary" onClick={() => navigate('/arttherapy')}>
                                {t('four.button')}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Methodes;
