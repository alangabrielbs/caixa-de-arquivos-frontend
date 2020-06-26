import jwt from 'jsonwebtoken';

const keyToken = '@token-caixa-de-arquivos';
const keyExp = '@exp-caixa-de-arquivos';

export const setTokenLocalStorage = (token) => {
  const decoded = jwt.decode(token);
  localStorage.setItem(keyToken, token);
  localStorage.setItem(keyExp, new Date(decoded.exp * 1000));
};

export const getTokenLocalStorage = () => {
  return localStorage.getItem(keyToken);
};

export const getExpiredTokenLocalStorage = () => {
  return localStorage.getItem(keyExp);
};

export const removeTokenLocalStorage = () => {
  localStorage.removeItem(keyToken);
  localStorage.removeItem(keyExp);
};
