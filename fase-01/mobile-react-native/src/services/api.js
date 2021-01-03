// Importando o axios para acessar as rotas no back-end 
import axios from 'axios';

const api = axios.create({
  baseURL:"http://localhost:3333"
});

export default api;

/******
 * Para baseURL
 * 
 * iOS com Emulador: localhost
 * iOS com física: IP da máquina
 * Android com Emulador: localhost (dado que use: adb reverse tcp:3333 tcp:3333)
 *    - Android é como se fosse uma máquina virtual então direcionamos o 
 *      localhost da máquina atual para a máquina virtual
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com dispositivo físico: IP da máquina
 *
 */