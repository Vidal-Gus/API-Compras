const express = require('express');
const compras = require('./controladores/compras');

const rota = express();

rota.get('/', compras.listarCompras);
rota.post('/adicionar', compras.adicionarCompra);
rota.get('/total', compras.calcularTotal);
rota.post('/remover/:id', compras.removerProduto);
rota.put('/atualizar/:id', compras.atualizarProduto);


module.exports = rota
