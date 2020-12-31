// Componentes ? -> Importa React -> JSX
import React from 'react';

// Componente cabeçalho
// Parametro -> todas as propriedades 
// Children -> Acessar o conteudo que a tag recebeu dentro dela -> Padrão
function Header({ title, children }){
  return (
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  );
}

// Exportando padrão
export default Header;