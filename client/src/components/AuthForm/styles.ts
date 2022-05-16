import styled from 'styled-components'

import { Colors } from '../../styles/colors'

const AuthFormComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
  .field {
    border: none;
    border-bottom: 2px solid ${Colors.darkGray};
    outline: none;
    width: 100%;
    font-size: 20px;
    padding: 5px;
  };
  .fieldMargin {
    margin-bottom: 30px;
  }
  .errorMessage {
    color: red;
    padding-left: 5px;
  };
`

export default AuthFormComponent
