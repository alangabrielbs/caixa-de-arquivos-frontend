import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  width: 100%;
  height: 100%;
  max-height: 45px;
  padding: 15px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border: none;
  margin-top: 25px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;

  :hover {
    background: ${({ background }) => lighten(0.04, background)};
  }
`;
