import { createConnection } from 'typeorm';

// Ao chamar a função, irá procurar o arquivo ormconfig.json
// Automaticamente ler o arquivo e faz conexão com banco de dados
createConnection();
