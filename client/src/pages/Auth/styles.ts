import styled from 'styled-components'

import Images from '../../assets/media/images/Images'
import { Colors } from '../../styles/colors'

// todo may be add fonts
const AuthComponent = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: auto;
  :before {
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
    width: 35%;
    overflow: auto;
    z-index: 1;
    @media (max-width: 1024px) {
      width: 45%;
    }
    @media (max-width: 768px) {
      width: 60%;
    }
  };
  .title {
    font-weight: bold;
    font-size: 26px;
    color: ${Colors.black};
    margin-bottom: 65px;
    @media (max-width: 1024px) {
      font-size: 24px;
    }
    @media (max-width: 768px) {
      font-size: 22px;
    }
  };
  .registration {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
  .registrationText {
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.grey};
  }
  .arrowIcon {
    margin-left: 15px;
    height: 18px;
  };
`

export default AuthComponent
