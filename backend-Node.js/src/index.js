/** SERVIDOR HTTP - Express Server
 *  -> Servidor que consegue "ouvir" requisições do usuário e retornar 
 *  respostas (response)
 */

const express = require('express');

const app = express();

 /**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

// ===========================================================

// Método GET - Buscando/ listando uma informação do back-end
app.get('/projects', (request,response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
})

app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]);
})

// PUT -> Deve informar qual projeto deseja alterar
// Ex: Atualizar o projeto do id 2: http://localhost:3333/projects/2
app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 4',
    'Projeto 3',
    'Projeto 2',
    'Projeto 1'
  ]);
})

// Delete 
app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3',
    'Projeto 4'
  ]);
})

// Quando servidor inicializa, indica uma mensagem
app.listen(3333, () => {
  console.log("🚀️ Back-end started!");
});