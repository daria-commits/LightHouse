import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './Modal.css';

function MyVerticallyCenteredModal(props) {
  const { t } = useTranslation('global');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Indiquer que la soumission est en cours
    const formData = new FormData(event.target);

    formData.append("access_key", "3bf988f5-6205-4571-9c63-dd4e2b88b1d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        props.setShowAlert(true);  // Afficher l'alerte à la place du modal
      } else {
        console.error("Error", res);
      }
    } catch (error) {
      console.error("Submit failed", error);
    } finally {
      setIsSubmitting(false); // Fin de soumission
      props.onHide();  // Fermer le modal après soumission
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title 
        id="contained-modal-title-vcenter"
        className="contained-modal-title-vcenter" 
        style={{ color: '#8C6C5A' }}
        >
          {t('modal.modalHeading')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{t('modal.email')}</Form.Label>
            <Form.Control
              type="email"
              className='email'
              placeholder={t('modal.email')}
              autoFocus
              name='email'
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRadio">
            <Form.Label>{t('modal.consultationFormat')}</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label={t('modal.individual')} 
                name="consultation_format"
                value="individual"
                id="individual"
                required
              />
              <Form.Check
                type="radio"
                label={t('modal.couple')} 
                name="consultation_format"
                value="couple"
                id="couple"
              />
              <Form.Check
                type="radio"
                label={t('modal.upgradeProgram')} 
                name="consultation_format"
                value="upgradeProgram"
                id="upgradeProgram"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t('modal.textarea')}</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" required />
          </Form.Group>

          <Modal.Footer>
            <Button 
            onClick={props.onHide}
            className='close-button'
            style={{ 
              backgroundColor: '#F2E6D8', 
              color: '#364959', 
              border: '1px solid #F2E6D8' 
            }}
            >{t('modal.close')}</Button>
            <Button variant="primary" type="submit" disabled={isSubmitting} className="custom-button">
              {isSubmitting ? t('modal.saving') : t('modal.saveChanges')}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

MyVerticallyCenteredModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setShowAlert: PropTypes.func.isRequired,  // Ajout de PropTypes pour setShowAlert
};

export default MyVerticallyCenteredModal;
