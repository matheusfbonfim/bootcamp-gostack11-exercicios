// Importa o react 
import React from 'react';

// Importando o componente Header - cabeçalho
import Header from './components/Header';

/* Caso queira repetir o mesmo componente, necessário colocar uma div ou 
   bloco por fora ou fragment (<> code aqui.. </>)
*/

/**
 * Componente 
 * Propriedade - informação que pode-se passar de um componente pai para um filho
 */

function App(){
  return (
    <>
      <Header title="Homepage"/>
      <Header title="Projects"/>
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