import styled from 'styled-components'

import { Colors } from '../../../styles/colors'

import { TestProps } from './index'

const AuthButtonComponent = styled.button<TestProps>`
  width: 100%;
  margin-top: 15px;
  height: 40px;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) => props.className === 'loginBtn' ? Colors.black : Colors.gray};
  color: ${(props) => props.className === 'loginBtn' ? Colors.white : Colors.black};
`

export default AuthButtonComponent
