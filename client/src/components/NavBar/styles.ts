import { Colors } from '../../styles/colors'
import styled from 'styled-components'

const NavBarComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 30px;
    height: 60px;
    border-bottom: 2px solid ${Colors.gray};
    background-color: ${Colors.black};
  .tabsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    width: 15%;
    @media (max-width: 1024px) {
      width: 19%;
    }
    @media (max-width: 768px) {
      width: 25%;
    }
  }
  .logoImgContainer {
    background-color: ${Colors.white};
    padding: 10px;
    border-radius: 50%;
  }
  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    width: 5%;
    @media (max-width: 1800px) {
      width: 10%;
    }
    @media (max-width: 1024px) {
      width: 12%;
    }
    @media (max-width: 768px) {
      width: 20%;
    }
  }
  .tabContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .logoTitle {
    display: flex;
    font-weight: bold;
    font-size: 24px;
    color: ${Colors.white};
  }
  .logoImg {
    width: 37px;
    height: 35px;
  }
  .tabTitle {
    font-size: 14px;
    margin: 0;
    font-weight: bold;
    color: ${Colors.white};
  }
  .ordersIcon {
    width: 30px;
    height: 30px;
  }
  .userIcon {
    width: 25px;
    height: 30px;
    padding: 5px 0;
  }
  .basketIcon {
    width: 25px;
    height: 30px;
  }
`

export default NavBarComponent
