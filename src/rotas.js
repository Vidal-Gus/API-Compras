const express = require('express');
const compras = require('./controladores/compras');

const rota = express();

rota.get('/', compras.listarCompras);
rota.post('/adicionar', compras.adicionarCompra);
rota.get('/total', compras.calcularTotal);

module.exports = rota
