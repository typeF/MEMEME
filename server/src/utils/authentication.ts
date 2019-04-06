import { verify } from 'jsonwebtoken';
import { Context } from '../types';

export const PRIVATE_KEY = 'SECRET';

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const token = context.request.session.jwt;
  console.log('getting UserID with token: ' + token);
  if (token) {
    const verifiedToken = verify(token, PRIVATE_KEY) as Token;
    return verifiedToken && verifiedToken.userId;
  }
}

