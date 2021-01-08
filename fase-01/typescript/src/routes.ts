// Importando dessa maneira achamos o tipo do express
import {Request, Response} from 'express';

// Atribui os tipos nos parametros
export function helloWorld(resquest: Request, response: Response) {
    return response.json({message: "Hello World"});
}