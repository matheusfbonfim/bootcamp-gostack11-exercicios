/**
 * Necessário colocar tipagem para o request, response e next
 * O express tem tais tipos em sua biblioteca, basta importa
 */
import { Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken';

// Informações de token
import authConfig from '../config/auth';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  // Validação do token JWT
  // Token -> Cabeçalho da requisição
  const authHeader = request.headers.authorization;

  // Se não existir
  if (!authHeader) {
    throw new Error('JWT Token is missing');
  }

  // Bearer (JWT Token)
  // Separar Bearer e o token
  const [, token] = authHeader.split(' ');

  // Token decodificado
  // Verify dará erro caso o token nao seja valido
  try {
    const decoded = verify(token, authConfig.jwt.secret);
    // Validadado
    console.log(decoded);
    // Permitido proximas rotas
    return next();
  } catch {
    throw new Error('Invalid JWT Token');
  }
}
