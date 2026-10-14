const app = require('./app');
const dotenv = require('dotenv');

Require('dotenv').config();

const express = require('express');
const cors = require('cors');
const produtosRouter = require('./routes/produtos');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', produtosRouter);

dotenv.config();
const port = process.env.PORT || 3000;


app.listen(port, () => {
 console.log(`Servidor rodando em http://localhost:${port}`);
});