const express = require('express');
const app = express();
const routes = require('./routes');

// midlaware
//executado antes de todas as rotas

app.use(express.json());
app.use(routes);

app.listen(3333);