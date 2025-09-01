const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usuariosRouter = require('./routes/usuarios');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/usuarios', usuariosRouter);

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/prueba-usuarios';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('No se pudo conectar a MongoDB', err);
    process.exit(1);
  }
};

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});