// Sobrescrever uma tipagem de dentro do express
// namespace esta dentro do express
declare namespace Express {
  // Sobrescrevendo a exportação de Request
  // Existente dentro de express
  // Será anexado mais informações com esse export
  export interface Request {
    user: {
      id: string;
    };
  }
}
