const express = require('express');
const cors = require('cors');
const app = express();
const { errors } = require('celebrate');

const routes = require('./routes');

// midlaware
//executado antes de todas as rotas

app.use(cors()); // permite quais apps podem acessar o back-end
app.use(express.json()); // converte o body passado em um json inteligível
app.use(routes);
app.use(errors()); // faz com que as validações nao retornem erros 500

module.exports = app;