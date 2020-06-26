import React from 'react';
import { useHistory } from 'react-router-dom';

import { removeTokenLocalStorage } from '../../utils/localStorage';

import { Container } from './styles';

export default function Home() {
  const history = useHistory();

  const logout = () => {
    removeTokenLocalStorage();
    history.push('/login');
  };

  return (
    <Container>
      <h1 onClick={logout}>Home</h1>
    </Container>
  );
}
