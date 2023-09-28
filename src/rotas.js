const express = require('express');
const compras = require('./controladores/compras');

const rota = express();

rota.get('/', compras.listarCompras);

module.exports = rota
