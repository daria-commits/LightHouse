// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

// Configurez CORS
app.use(cors()); 
app.use(bodyParser.json()); 

// Configuration du transporteur de mail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bdaria259@gmail.com', // Remplacez par votre adresse email
        pass: 'Prokopievsk21' // Remplacez par votre mot de passe ou un mot de passe d'application
    }
});

// Route pour envoyer un email
app.post('/', (req, res) => {
    const { email, message } = req.body;

    const mailOptions = {
        from: email, 
        to: 'bdaria259@gmail.com', // Votre adresse email
        subject: 'Nouveau message de contact',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email envoyé avec succès: ' + info.response);
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
