const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  // Agregar más campos según las necesidades
});

module.exports = mongoose.model('Usuario', usuarioSchema);