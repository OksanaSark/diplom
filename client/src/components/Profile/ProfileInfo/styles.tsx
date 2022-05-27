import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

export const ProfileInfoComponent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    align-items: center;
    width: 90%;
  .userInfoContainer {
    width: 35%;
    height: 300px;
    border: 2px solid ${Colors.black};
    border-radius: 25px;
    padding: 15px;
    @media (max-width: 1100px) {
      width: 40%;
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
  }
  .info {
    display: flex;
    width: 90%;
    align-items: center;
    font-size: 20px;
    padding-left: 10px;
    color: ${Colors.grey};
    margin: 0;
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .userName {
    font-size: 24px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  span {
    color: ${Colors.black};
    margin: 0;
    padding: 5px 15px;
    @media (max-width: 768px) {
      padding: 10px 0;
      font-size: 18px;
    }
  }
  .adminPanelContainer {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    align-items: center;
    width: 55%;
    height: fit-content;
    border: 2px solid ${Colors.black};
    border-radius: 25px;
  }
  .userImg {
    width: 180px;
    height: 180px;
    @media (max-width: 850px) {
      width: 150px;
      height: 150px;
    }
    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }
  .title {
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 5px;
    font-size: 20px;
    border-bottom: 2px solid ${Colors.black};
  }
  .optionsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    height: 80%;
    min-height: 260px;
    @media (max-width: 1100px) {
      width: 80%;
    }
  }
  .options {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
`
