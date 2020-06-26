import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toastMessage from '../../utils/toastMessage';
import { setTokenLocalStorage } from '../../utils/localStorage';

import api from '../../services/api';

import Logo from '../../assets/images/LogoPrimary';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  WrapperForm,
  ContentForm,
  Form,
  WrapperImage,
} from './styles';

export default function Login() {
  const [error, setError] = useState(false);
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const handleLogin = async ({ email, password }) => {
    try {
      setError(false);
      const response = await api.post('/sessions', { email, password });
      setTokenLocalStorage(response.data.token);
      history.push('/');
    } catch (err) {
      if (err.response.data.error === 'User not found') {
        toastMessage('error', 'Usuário não encontrado', 'top-right');
      }

      if (err.response.data.error === 'Password does not match') {
        setError(true);
        toastMessage('error', 'E-mail ou senha inválidos.', 'top-right');
      }
    }
  };

  const onSubmit = (data) => handleLogin(data);

  return (
    <Container>
      <WrapperForm>
        <ContentForm>
          <Logo />
          <h3>Acesse</h3>
          <p>
            sua conta do Dropbox ou{' '}
            <Link to="/registrar">
              <span>crie uma nova conta</span>
            </Link>
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {error && <p>E-mail ou senha inválidos.</p>}
            <Input
              type="text"
              name="email"
              placeholder="E-mail"
              register={register}
              pattern={{
                value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                message: 'E-mail inválido',
              }}
              required="Este campo é obrigatório"
              error={errors.email}
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              register={register}
              required="Este campo é obrigatório"
              error={errors.password}
            />

            <Button>Acessar</Button>
          </Form>
        </ContentForm>
      </WrapperForm>
      <WrapperImage />
    </Container>
  );
}
