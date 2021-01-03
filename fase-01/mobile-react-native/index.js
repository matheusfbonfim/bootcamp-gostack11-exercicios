/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Importando a aplicacao de dentro de source (src)
import App from './src/index';
import {name as appName} from './app.json';

// registerComponent -> renderizar 
AppRegistry.registerComponent(appName, () => App);
