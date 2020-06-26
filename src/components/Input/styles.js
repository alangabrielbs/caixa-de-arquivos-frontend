import styled from 'styled-components';

export const Input = styled.input`
  padding: 15px;
  font-size: 14px;
  border: 1px solid #bdc4c9;
  margin-top: 24px;
  transition: all 0.3s;
  max-height: 45px;

  ::placeholder {
    color: #bdc4c9;
  }

  :focus,
  :hover {
    border: 1px solid #000;
  }

  @media (max-width: 425px) {
    margin-top: 18px;
  }
`;

export const ErrorMessage = styled.p`
  color: #eb424d;
  margin-top: 4px;
`;
