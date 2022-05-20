import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const customModalStyle = {
    content: {
        width: '440px',
        height: 'fit-content',
        minHeight: '490px',
        top: '45%',
        left: '50%',
        bottom: 0,
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
        padding: 0,
    },
}

const AuthModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  .title {
    font-weight: bold;
    font-size: 24px;
    color: ${Colors.black};
    margin-bottom: 55px;
    @media (max-width: 1024px) {
      font-size: 22px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
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
