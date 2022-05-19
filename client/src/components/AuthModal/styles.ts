import styled from 'styled-components'

import { Colors } from '../../styles/colors'

export const customModalStyle = {
    content: {
        width: '440px',
        height: '580px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
    },
}

const AuthModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px 0 40px;
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
    cursor: pointer;
  };
  .registrationText {
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.grey};
  };
  .arrowIcon {
    margin-left: 15px;
    height: 18px;
  };
    
`

export default AuthModalComponent
