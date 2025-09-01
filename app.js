const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usuariosRouter = require('./routes/usuarios');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/usuarios', usuariosRouter);

mongoose.connect('mongodb://localhost/prueba-usuarios', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});