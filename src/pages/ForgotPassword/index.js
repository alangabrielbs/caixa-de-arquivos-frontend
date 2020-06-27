import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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

export default function ForgotPassword() {
  const { register, errors, handleSubmit } = useForm();

  const handleForgot = async ({ email }) => {
    try {
      const response = await api.post('/passwords/forgot', { email });
      toastMessage('success', response.data.message, 'top-right');
    } catch (err) {
      toastMessage('error', err.response.data.error, 'top-right');
    }
  };

  const onSubmit = (data) => handleForgot(data);

  return (
    <Container>
      <WrapperImage />
      <WrapperForm>
        <ContentForm>
          <Link to="/login">
            <Logo />
          </Link>
          <h3>Esqueceu sua senha?</h3>
          <p>
            Digite seu endereço de e-mail para redefinir a senha. Talvez você
            precise verificar sua pasta de spams
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

            <Button>Enviar</Button>
          </Form>
        </ContentForm>
      </WrapperForm>
    </Container>
  );
}
