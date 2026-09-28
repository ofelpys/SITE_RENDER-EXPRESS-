const express = require('express');
const path = require('path');

const app = express();
const porta = process.env.PORT || 3000;
const pastaDoSite = __dirname;

app.use(express.static(pastaDoSite));

app.get('/', (req, res) => {
  res.sendFile(path.join(pastaDoSite, 'index.html'));
});

app.listen(porta, () => {
  console.log(`Site de receitas rodando na porta ${porta}`);
});
