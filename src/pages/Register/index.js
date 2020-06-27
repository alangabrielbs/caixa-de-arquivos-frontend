import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { setTokenLocalStorage } from '../../utils/localStorage';
import toastMessage from '../../utils/toastMessage';

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

export default function Register() {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const handleRegister = async ({ name, email, password }) => {
    try {
      await api.post('/users', { name, email, password });

      const response = await api.post('/sessions', { email, password });
      setTokenLocalStorage(response.data.token);
      history.push('/');

      toastMessage('success', `Bem vindo, ${name}!`, 'top-right');
    } catch (err) {
      toastMessage('error', err.response.data.error, 'top-right');
    }
  };

  const onSubmit = (data) => handleRegister(data);

  return (
    <Container>
      <WrapperImage />
      <WrapperForm>
        <ContentForm>
          <Link to="/login">
            <Logo />
          </Link>
          <h3>Registre-se</h3>
          <p>
            ou{' '}
            <Link to="/login">
              <span>acesse sua conta</span>
            </Link>
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              register={register}
              pattern={{
                value: /^[a-zA-Z\u00C0-\u00FF]+\s[a-zA-Z\u00C0-\u00FF](([',. -][a-zA-Z\u00C0-\u00FF ])?[a-zA-Z\u00C0-\u00FF]*)*$/,
                message: 'Informe seu nome completo',
              }}
              required="Nome é obrigatório"
              error={errors.name}
            />
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
              minLength={{
                value: 6,
                message: 'Senha deve ter no mínimo 6 caracteres',
              }}
              required="Confirmar a senha é obrigatório"
              error={errors.password}
            />

            <Button>Registra-se</Button>
          </Form>
        </ContentForm>
      </WrapperForm>
    </Container>
  );
}
