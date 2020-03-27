const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');

// midlaware
//executado antes de todas as rotas

app.use(cors()); // permite quais apps podem acessar o back-end
app.use(express.json()); // converte o body passado em um json inteligível
app.use(routes);

app.listen(3333);