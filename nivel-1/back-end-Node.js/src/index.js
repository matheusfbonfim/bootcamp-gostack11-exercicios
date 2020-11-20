/** 
 * SERVIDOR HTTP - Express Server
 * 
 *  -> Servidor que consegue "ouvir" requisições do usuário e retornar 
 *  respostas (response)
 * 
 */

const express = require('express');
const {uuid} = require("uuidv4"); // ID Único universal

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

// Armazenar o projetos - Array
const projects = [];

// Método GET - Buscando/ listando uma informação do back-end
app.get('/projects', (request, response) => {
  
  //const {title, owner} = request.query;
  //console.log(title, owner);

  return response.json(projects);
})

// Create
app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  const project = {id: uuid(), title, owner};
  projects.push(project);

  return response.json(project);
})

// PUT -> Deve informar qual projeto deseja alterar
// Ex: Atualizar o projeto do id 2: http://localhost:3333/projects/2
app.put('/projects/:id', (request, response) => {
  const {id} = request.params;
  const {title, owner} = request.body;

  // Retorna -1 quando não acha
  const projectIndex = projects.findIndex((project) => {
      return project.id === id;
  });

  if(projectIndex < 0) {
    return response.status(400).json({error: 'Project not found'})
  } 

  const project = {
    id,
    title, 
    owner
  }

  projects[projectIndex] = project

  return response.json(project);
})

// Delete 
app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  // Retorna -1 quando não acha
  const projectIndex = projects.findIndex((project) => {
    return project.id === id;
  });

  if(projectIndex < 0) {
    return response.status(400).json({error: 'Project not found'})
  } 
  
  // Remover do array projects
  projects.splice(projectIndex, 1);
  
  return response.status(204).send();
})

// Quando o servidor inicializa, indica uma mensagem
app.listen(5005, () => {
  console.log("🚀️ Back-end started!");
})