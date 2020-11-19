/** SERVIDOR HTTP - Express Server
 *  -> Servidor que consegue "ouvir" requisições do usuário e retornar 
 *  respostas (response)
 */

const express = require('express');

const app = express();

app.listen(3333);

 /**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */



// ===========================================================

// Método get
app.get('/', (request,response) => {
  return response.json({message: "Hello World"});
})
