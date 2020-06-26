import jwt from 'jsonwebtoken';
import { getTokenLocalStorage } from './localStorage';

const token = getTokenLocalStorage();

export const decodeToken = () => jwt.decode(token);
