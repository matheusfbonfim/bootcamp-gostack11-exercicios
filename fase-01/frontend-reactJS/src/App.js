// Importa o react 
import React from 'react';

// Importando o componente Header - cabeçalho
import Header from './components/Header';

/* Caso queira repetir o mesmo componente, necessário colocar uma div ou 
   bloco por fora
*/

function App(){
  return (
    <>
      <Header/>
      <Header/>
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