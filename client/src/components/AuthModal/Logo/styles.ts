import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

const LogoComponent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
  .logo {
    border: solid 2px ${Colors.black};
    padding: 15px;
    border-radius: 50%;
    margin: 0 10px;
  };
  .logoImg {
    width: 45px;
    height: 45px;
  };
  .line {
    width: 40%;
    height: 1px;
    background-color:  ${Colors.black};
  };
`

export default LogoComponent
