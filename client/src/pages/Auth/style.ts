import styled from 'styled-components'

import Images from '../../assets/media/images/Images'
import { Colors } from '../../styles/colors'

// todo add fonts
const AuthComponent = styled.div`
  .container {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: auto;
  };
  .container:before {
        display: flex;
        content: ' ';
        opacity: 0.6;
        width: 100%; 
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        overflow: auto;
        background: url(${Images.Bg}) no-repeat 50% 50%;
        background-size: cover;
  };
  .loginContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${Colors.white};
        border-radius: 20px;
        padding: 40px 40px 37px 40px;
        width: 30%;
        height: 60%;
        overflow: auto;
        z-index: 1;
  };
  .formContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
  };
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
  .title {
        font-weight: bold;
        font-size: 26px;
        color: ${Colors.black};
  };
  .field {
        border: none;
        border-bottom: 2px solid black;
        outline: none;
        width: 100%;
        font-size: 20px;
        padding: 5px;
        margin-bottom: 30px;
  };
  .loginBtn {
        width: 100%;
        background-color: ${Colors.black};
        height: 40px;
        border: none;
        border-radius: 3px;
        color: ${Colors.white};
        font-size: 18px;
        cursor: pointer;
  };
  .registrationBtn {
        width: 100%;
        background-color: ${Colors.gray};
        height: 40px;
        border: none;
        border-radius: 3px;
        color: ${Colors.black};
        font-size: 18px;
        cursor: pointer;
        margin-top: 10px;
  };
  .errorMessage {
        color: red;
        text-align: start;
        padding: 5px;
  }
`

export default AuthComponent
