import express from "express";
// Importando as rotas
import routes from "./routes";

// Instanciando o express
const app = express();

// Define todas as rotas dentro do app
app.use(routes);

app.listen(3333, () => {
  console.log("🚀 Server started on port 3333!");
});
