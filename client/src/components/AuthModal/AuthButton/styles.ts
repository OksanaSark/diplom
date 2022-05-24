import { AuthButtonProps } from './index'

import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

const AuthButtonComponent = styled.button<AuthButtonProps>`
  width: 100%;
  margin-top: 20px;
  height: 40px;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) => props.className === 'loginBtn' ? Colors.black : Colors.gray};
  color: ${(props) => props.className === 'loginBtn' ? Colors.white : Colors.black};
`

export default AuthButtonComponent
