const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();

// Middlewares globaux
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Log de toutes les requêtes pour le débogage
app.use((req, res, next) => {
  console.log(`📡 ${req.method} ${req.url}`);
  next();
});

// Limiteur de requêtes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});
app.use('/api/', limiter);

// Route de test
app.get('/', (req, res) => {
  res.json({ message: "Bienvenue sur l'API de l'agence digitale." });
});

// Import des routes
const authRoutes = require('./routes/auth');
const clientRoutes = require('./routes/clients');
const projetRoutes = require('./routes/projets');
// const serviceRoutes = require('./routes/services');
const formationRoutes = require('./routes/formations');
/*
const inscriptionRoutes = require('./routes/inscriptions');
const coursRoutes = require('./routes/cours');
const progressionRoutes = require('./routes/progression');
const certificatRoutes = require('./routes/certificats');
const factureRoutes = require('./routes/factures');
const publicationRoutes = require('./routes/publications');
const rapportRoutes = require('./routes/rapports');
const contactRoutes = require('./routes/contacts');
*/

// Enregistrement des routes
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/projets', projetRoutes);
// app.use('/api/services', serviceRoutes);
app.use('/api/formations', formationRoutes);
/*
app.use('/api/inscriptions', inscriptionRoutes);
app.use('/api/cours', coursRoutes);
app.use('/api/progression', progressionRoutes);
app.use('/api/certificats', certificatRoutes);
app.use('/api/factures', factureRoutes);
app.use('/api/publications', publicationRoutes);
app.use('/api/rapports', rapportRoutes);
app.use('/api/contacts', contactRoutes);
*/

// Gestion d'erreurs globale
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Une erreur serveur est survenue.",
    code: err.code || "SERVER_ERROR"
  });
});

module.exports = app;
