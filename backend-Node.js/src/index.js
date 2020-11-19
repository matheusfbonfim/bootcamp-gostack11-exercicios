/** SERVIDOR HTTP - Express Server
 * 
 *  -> Servidor que consegue "ouvir" requisições do usuário e retornar 
 *  respostas (response)
 * 
 */

const express = require('express');
const app = express();

// Por padrão o express não interpreta os envios no formato JSON
// Necessário informar que a API irá receber informações no formato JSON
// ".use" faz com que todas as rotas considere o que for estipulado
app.use(express.json())


 /**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/ Deletar)
 * Request Body: Contéudo na hora de criar ou editar um recurso (JSON)
 *
 */

// Método GET - Buscando/ listando uma informação do back-end
app.get('/projects', (request, response) => {
  
  const {title, owner} = request.query;
  console.log(title, owner);
  
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
})

app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  console.log(title);
  console.log(owner);

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
  const {id} = request.params;
  
  console.log(id);

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

// Quando o servidor inicializa, indica uma mensagem
app.listen(5000, () => {
  console.log("🚀️ Back-end started!");
})