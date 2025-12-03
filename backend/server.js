const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB - VERSION CORRIGÉE
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB Connecté'))
.catch(err => console.error('❌ Erreur MongoDB:', err));

// Route test
app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend Outil Dev en cours!',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Route API de base
app.get('/api/test', (req, res) => {
  res.json({ message: 'API fonctionne!' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});