import styled from 'styled-components'

import { Colors } from '../../../styles/colors'

const LogoComponent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  .logo {
    border: solid 2px ${Colors.black};
    padding: 20px;
    border-radius: 50%;
    margin: 0 10px;
  };
  .logoImg {
    width: 55px;
    height: 55px;
  };
  .line {
    width: 40%;
    height: 1px;
    background-color:  ${Colors.black};
  };
`

export default LogoComponent
