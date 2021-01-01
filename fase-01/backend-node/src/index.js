/** 
 * SERVIDOR HTTP - Express Server
 * 
 *  -> Servidor que consegue "ouvir" requisições do usuário e retornar 
 *  respostas (response)
 * 
 */

const express = require('express');
const {uuid, isUuid} = require("uuidv4"); // ID Único universal

// Importando o cors 
const cors = require('cors');

const app = express();

// Por padrão o express não interpreta os envios no formato JSON
// Necessário informar que a API irá receber informações no formato JSON
// ".use" faz com que todas as rotas considere o que for estipulado
app.use(express.json())

// app.use(cors()) -> Permiti que qualquer front end tenha acesso ao nosso back end 
app.use(cors());

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

/**
  * Middleware:
  * 
  * Interceptador de requisições que pode interromper totalmente a 
  * requisição ou alterar dados da requisição.
  * 
*/

// Armazenar o projetos - Array
const projects = [];

// Mostra a rota sendo chamada pelo Insomnia
// Quais rotas estão sendo chamadas e quais métodos
function logRequest(request, response, next){
  // Desestruturação -> Encontra o metodo e url da requisição
  const {method, url} = request;

  // Coloca o método e a url
  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log('1');
  console.time(logLabel);

  // Chamar o próximo (Deixar os algoritmos seguintes a serem executados)
  next(); // Próximo middleware

  console.log('2');
  console.timeEnd(logLabel);
}

// Validar se o ID na rota de atualização ou delete 
function validateProjectId(request, response, next){
  const { id } = request.params;
  // isUuid é uma função que valida se é um ID mesmo (formato...)
  if(!isUuid(id)){
    return response.status(400).json({error: 'Invalid project id.'});
  }
  
  // Depois de retornar ele finaliza a requisição
  // Diferente de somente o next()
  return next();
}

// Toda ação executa a determinada função
app.use(logRequest);
// Usa o middleware especificamente nas rotas 
app.use('/projects/:id', validateProjectId);

// Método GET - Buscando/ listando uma informação do back-end
app.get('/projects',(request, response) => {
  console.log('3');

  const {title} = request.query;
  
  // Todos os projetos que conter uma determinada palavra
  const results = title 
  // Verifica se no project inclui o titulo title
  ? projects.filter(project => project.title.includes(title))
  : projects;

  return response.json(results);
});

// Create
app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  const project = {id: uuid(), title, owner};
  projects.push(project);

  return response.json(project);
});

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

  projects[projectIndex] = project;

  return response.json(project);
})

// Delete 
app.delete('/projects/:id',(request, response) => {
  console.log('3')
  
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
  
  // Resposta vazia
  return response.status(204).send();
})

// Quando o servidor inicializa, indica uma mensagem
app.listen(3333, () => {
  console.log("🚀️ Back-end started!");
})