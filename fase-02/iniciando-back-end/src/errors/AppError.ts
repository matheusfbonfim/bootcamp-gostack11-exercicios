class Error {
  // Publicas
  // readonly -> Apenas leitura, não conseguindo atribuir valores
  public readonly message: string;

  public readonly statusCode: number; // 401,404...

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default Error;
