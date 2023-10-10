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
    },
    removerProduto: async function (req, res) {
        const { id } = req.params;

        try {
            const query = `delete from lista_compras where id = $1 returning nome;`

            const resultado = await mercado.query(query, [id]);

            if (resultado.rowCount < 1) {
                return res.status(404).json({ mensagem: "Item não encontrado!" })
            }

            return res.status(200).json({ item_removido: resultado.rows[0] })

        } catch (e) {
            console.log(e);
            return res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    },
    atualizarProduto: async function (req, res) {
        const { nome, preco } = req.body;
        const { id } = req.params;
        if (!nome || !preco) {
            return res.status(400).json({ mensagem: "Nome e preco são obrigatórios" })
        }

        try {
            const query = `
            update lista_compras set nome = $1, preco = $2 where id = $3 returning *;
            `
            const resultado = await mercado.query(query, [nome, preco, id])

            if (resultado.rowCount < 1) {
                return res.status(404).json({ mensagem: "Produto não encontrado" })
            }

            return res.status(200).json(resultado.rows)

        } catch (e) {
            console.log(e);
            return res.status(500).json({ mensagem: "Erro no servidor" })
        }
    }
}

module.exports = operacoes