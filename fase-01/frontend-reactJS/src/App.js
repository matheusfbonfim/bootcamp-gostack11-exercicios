// Importa o react 
import React, {useState} from 'react';

// Importando o componente Header - cabeçalho
import Header from './components/Header';

/* 
* Caso queira repetir o mesmo componente, necessário colocar uma div ou 
* bloco por fora ou fragment (<> code aqui.. </>)
*
* Componente 
* Propriedade - informação que pode-se passar de um componente pai para um filho
*/

// Para incluir JS no componente sempre usar "{}"
// Maneira dinamica retorna os projects -> Retorna itens da lista
// Ex: {projects.map(project => <li>{project}</li>)}
function App(){
  // useState retorna um array com 2 posições
    // 1. Variavel com seu valor inicial
    // 2. Função para atualizarmos esse valor
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  // Função para adicionar um projeto
    // Utilizado no onClick -> evento do botão
  function handleAddProject(){
    
    // Imutabilidade
      // Temos que criar um novo componente, e não alterar o projects
      //projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects"/>
      
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  ) ;
}

/**
 * 
 * + Exportando padrão + 
 * Se o arquivo for importado e não especificado qual das n funções retorna
 * como padrão a função App
 * 
 */
export default App;