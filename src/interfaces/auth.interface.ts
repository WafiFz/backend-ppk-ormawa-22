import { Request } from 'express';
import { Admin, User } from '@prisma/client';

export interface DataStoredInToken {
  id: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: User;
}

export interface RequestWithAdmin extends Request {
  admin: Admin;
}
