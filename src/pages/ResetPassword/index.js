import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useQuery from '../../hooks/useQuery';
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

export default function ResetPassword() {
  const history = useHistory();
  const query = useQuery();
  const { register, errors, handleSubmit } = useForm();

  const handleReset = async ({ password, confirmPassword }) => {
    try {
      const token = query.get('token');
      const response = await api.put('/passwords/reset', {
        password,
        confirmPassword,
        token,
      });
      toastMessage('success', response.data.message, 'top-right');
      history.push('/login');
    } catch (err) {
      toastMessage('error', err.response.data.error, 'top-right');
    }
  };

  const onSubmit = (data) => handleReset(data);

  return (
    <Container>
      <WrapperImage />
      <WrapperForm>
        <ContentForm>
          <Link to="/login">
            <Logo />
          </Link>
          <h3>Resetar senha</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              register={register}
              minLength={{
                value: 6,
                message: 'Senha deve ter no mínimo 6 caracteres',
              }}
              required="Senha é obrigatório"
              error={errors.password}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Repita a senha"
              register={register}
              minLength={{
                value: 6,
                message: 'Senha deve ter no mínimo 6 caracteres',
              }}
              required="Senha é obrigatório"
              error={errors.confirmPassword}
            />

            <Button>Alterar senha</Button>
          </Form>
        </ContentForm>
      </WrapperForm>
    </Container>
  );
}
