// Importar a "biblioteca" react para utilizá-la
import React from 'react';
import { render } from 'react-dom';

// Importando o componente App
import App from './App';

// É possível renderizar o html dentro do javascript graças ao babel e webpack
// Escreve App como uma tag do html
render(<App/>, document.getElementById('app'));