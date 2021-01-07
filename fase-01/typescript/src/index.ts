// Importando o servidor - express
import express from 'express';

// Instancia o express
const app = express();

// Criação de uma rota
app.get('/', (req, res) => {
  return res.json({message: "Hello World"});
})


app.listen(3333);