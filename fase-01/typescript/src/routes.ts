// Importando dessa maneira achamos o tipo do express
import {Request, Response} from 'express';

// Importando a criação do usuario
import createUser from './services/CreateUser';

// Atribui os tipos nos parametros
export function helloWorld(resquest: Request, response: Response) {
    const user = createUser({
        email: "matheusbonfim@alunos.utfpr.edu.br",
        password: "123456",
        techs: [
            'Nodejs',
            'ReactJS',
            'ReactNative',
            { title: 'Javascript' , experience: 100},
        ]
    });

    
    
    return response.json({message: "Hello World"});
}