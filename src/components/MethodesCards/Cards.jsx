import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import './Cards.css';

// Importez les images spécifiques
import image from '../../assets/write.jpg';
import imageDeux from '../../assets/writer-deux.jpg'
import art from '../../assets/brushes.jpg'

function Cards() {
  const { t } = useTranslation('global');

  const cardData = [
    {
      titlecards: t('first.title'),
      textcards: t('first.content'),
      link: "/narrativetherapy",
      buttoncards: t('first.button'),
      image:imageDeux , 
    },
    {
      titlecards: t('second.title'),
      textcards: t('second.content'),
      link: "/externalization",
      buttoncards: t('second.button'),
      image: imageDeux, // Image spécifique à cette carte
    },
    {
      titlecards: t('third.title'),
      textcards: t('third.content'),
      link: "/writtenpractices",
      buttoncards: t('third.button'),
      image: image, // Image spécifique à cette carte
    },
    {
      titlecards: t('four.title'),
      textcards: t('four.content'),
      link: "/arttherapy",
      buttoncards: t('four.button'),
      image: art, // Image spécifique à cette carte
    },
  ];

  return (
    <div className="cards-section">
      <h2 className="methods-title">{t('methods.title')}</h2>
      <Row xs={1} md={2} className="g-4">
        {cardData.map((card, idx) => (
          <Col key={idx}>
            <Card className="custom-card">
              {/* Utilisez l'image spécifique à chaque carte */}
              <Card.Img
                variant="top"
                src={card.image} // Affiche l'image définie dans cardData
                alt={`Image for ${card.titlecards}`}
              />
              <Card.Body>
                <Card.Title className="card-title">{card.titlecards}</Card.Title>
                <Card.Text className="card-text">{card.textcards}</Card.Text>
                <Link to={card.link}>
                  <Button className="primary-button">{card.buttoncards}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
