// Componentes ? -> Importa React -> JSX
import React from 'react';

// Componente cabeçalho
// Parametro -> todas as propriedades 
function Header({ title }){
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

// Exportando padrão
export default Header;