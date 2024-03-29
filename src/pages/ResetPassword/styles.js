import styled from 'styled-components';

import bg_register from '../../assets/images/image-register.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 55%;

  @media (max-width: 890px) {
    width: 100%;
  }
`;

export const ContentForm = styled.div`
  width: 100%;
  max-width: 460px;
  padding: 0 20px;

  > a svg {
    margin-bottom: 50px;
  }

  h3 {
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 5px;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-size: 12px;

    span {
      color: #8c6ff0;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperImage = styled.div`
  display: flex;
  width: 45%;
  height: 100%;
  background: url(${bg_register}) no-repeat center;
  float: left;
  background-size: cover;

  @media (max-width: 890px) {
    display: none;
  }
`;
