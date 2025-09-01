const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/prueba-usuarios';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});