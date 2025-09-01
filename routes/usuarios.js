const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).send(usuario);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.send(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;