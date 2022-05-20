import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

const AuthFormComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
  .field {
    border: none;
    border-bottom: 2px solid ${Colors.darkGray};
    outline: none;
    width: 100%;
    font-size: 18px;
    padding: 5px;
  };
  .fieldMargin {
    margin-bottom: 30px;
  }
  .errorMessage {
    color: red;
    padding-left: 5px;
    font-size: 12px;
  };
`

export default AuthFormComponent
