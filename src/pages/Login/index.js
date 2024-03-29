import React from 'react';
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
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await api.post('/sessions', { email, password });
      setTokenLocalStorage(response.data.token);
      history.push('/');
    } catch (err) {
      toastMessage('error', err.response.data.error, 'top-right');
    }
  };

  const onSubmit = (data) => handleLogin(data);

  return (
    <Container>
      <WrapperForm>
        <ContentForm>
          <Link to="/">
            <Logo />
          </Link>
          <h3>Acesse</h3>
          <p>
            sua conta do Dropbox ou{' '}
            <Link to="/registrar">
              <span>crie uma nova conta</span>
            </Link>
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="email"
              placeholder="E-mail"
              register={register}
              pattern={{
                value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                message: 'E-mail inválido',
              }}
              required="E-mail é obrigatório"
              error={errors.email}
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              register={register}
              required="Senha é obrigatório"
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
