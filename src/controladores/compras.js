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
    },
    adicionarCompra: async function (req, res) {
        const { nome, preco } = req.body;
        if (!nome || !preco) {
            return res.status(400).json({ mensagem: "Nome e preco são obrigatórios!" })
        }
        try {
            const query = `
            insert into lista_compras (nome, preco) values ($1, $2) returning *;
            `
            const resultado = await mercado.query(query, [nome, preco]);

            return res.status(201).json(resultado.rows);
        } catch (e) {
            console.log(e);
            return res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    },
    calcularTotal: async function (req, res) {
        try {
            const resultado = await mercado.query(`select sum(preco) from lista_compras;`);

            if (resultado.rowCount < 1) {
                return res.status(404).json({ mensagem: "Itens não encontrados!" })
            }

            const valorBruto = resultado.rows[0].sum;
            const valorFormatado = valorBruto / 100;

            return res.status(200).json({ valorBruto, valorFormatado });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
}

module.exports = operacoes