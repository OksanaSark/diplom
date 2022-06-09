import { AuthButtonProps } from './index'

import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

const AuthButtonComponent = styled.button<AuthButtonProps>`
  width: 100%;
  margin-top: 20px;
  min-height: 40px;
  height: fit-content;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
  background-color: ${(props) => props.className === 'loginBtn' ? Colors.black : Colors.gray};
  color: ${(props) => props.className === 'loginBtn' ? Colors.white : Colors.black};
  opacity: ${(props) => props.disabled && 0.3};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export default AuthButtonComponent
