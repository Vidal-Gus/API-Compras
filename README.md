# API-Compras
Criei esta API com o sentido de me ajudar nas compras que tenho que fazer regularmente, o objetivo é listar as compras e fazer calculo de total automatico, incluindo também alterações dos itens da lista.
Tentei deixar o mais proximo de RESTful possivel!

### Tecnologias utilizadas 
- Javascript / Node.js
- Express
- PostgreSQL / node-posgres (pg)
 > Nodemon está como dependencia de desenvolvimento

## End Points
- Listar Compras :`/`
- Calcular Total: `/total`
- Adicionar Produto: `/adicionar`
- Remover Produto: `/remover/:id`
- Atualizar Produto `/atualizar/:id`

## Detalhamentos dos End Points
**`GET` `/`**
Este irá mostrar a Lista de produtos já presente no banco de Dados

![ListarCompras](https://github.com/Vidal-Gus/API-Compras/assets/101154222/b28b82d6-e428-4d0f-8dbf-36063e9c89c5)

--- 
**`GET` `/total`**
Esta rota vai mostrar o total dos precos dos produtos adicionados

![CalcularTotal](https://github.com/Vidal-Gus/API-Compras/assets/101154222/cbaf4c7f-c00a-480c-abec-545799f40e3b)

--- 
**`POST` `/adicionar`**
Esta rota vai adicionar um novo produto no banco de dados!

⚠️ O valor de "preco" tem que ser dado em **centavos** para o calculo correto!

![AdicionarReq](https://github.com/Vidal-Gus/API-Compras/assets/101154222/8e181ca7-e2eb-45b3-a142-fa37bdef1238)

A resposta virá no seguinte formato: 

![AdicionarRes](https://github.com/Vidal-Gus/API-Compras/assets/101154222/bb4b54a8-33c6-4efb-9483-2b2350b273e8)

Mostrando assim as informações do item adicionado incluindo seu ID para referencia

---
**`POST` `/remover/:id`**
Rota feita para a remoção de produto presente no banco de dados

id deve ser enviado no parametro de rota como mostrado no exemplo:

![RemoverReq](https://github.com/Vidal-Gus/API-Compras/assets/101154222/8bdd8144-f470-481d-9e1a-0d6100e0b793)

A resposta mostrara o nome do item removido

![RemoverRes](https://github.com/Vidal-Gus/API-Compras/assets/101154222/23e3cb87-0dcf-4944-a555-1d614b618976)

---
**`POST` `/atualizar/:id`**

Atualiza um item **existente** no banco de dados

![AtualizarReq](https://github.com/Vidal-Gus/API-Compras/assets/101154222/0f5b66d3-ebc5-43e2-bb07-16bb0a75e97a)

Responderá com o produto atualizado

![AtualizarRes](https://github.com/Vidal-Gus/API-Compras/assets/101154222/9b25fb42-742b-4b5b-82bb-efc041750bda)

--- 

Esta API continua em desenvolvimento, então haverá mudanças e atualizações em alguns pontos em breve!!

## Updates

- [x] Sistema Base
- [ ] Agrupar itens por nome para quantidade + preços

🉑Aceito Sugestões de melhora de código, documentações e novas implementações!
