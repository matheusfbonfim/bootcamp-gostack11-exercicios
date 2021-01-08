/**
 * Para criar um usuário: name, email, password
 * 
 */

// Cria um tipo de dado para techs -> array
// Precisamos definir o formato de um objeto
interface TechObject{
  title: string;
  experience: number;

}

 // Cria um tipo de dado chamada CreateUserData
 interface CreateUserData{
  // Tipo string e opcional 
  name?: string;
  // Tipo string
  email: string;
  password: string;
  // Tipo de array variavel - usa-se operadores logicos
  techs: Array<string | TechObject>;
}

// Para desestruturar, já é entendido que o parametro é CreateUserData
export default function createUser({name, email, password}: CreateUserData){
  const user ={
    name,
    email,
    password
  }

  return user;
}