const mercado = require('../banco/conect');

const operacoes = {
    listarCompras: async function (req, res) {
        try {
            const resultado = mercado.query('select * from lista_compras;');

            return res.status(200).json((await resultado).rows)
        } catch (e) {
            console.log(e);
            return res.status(500).json({ mensagem: "Erro no servidor!!" })
        }
    }
}

module.exports = operacoes