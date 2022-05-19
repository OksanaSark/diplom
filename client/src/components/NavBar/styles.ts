import styled from 'styled-components'

const NavBarComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    height: 60px;
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
  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    width: 5%;
    @media (max-width: 1800px) {
      width: 8%;
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
    font-size: 20px;
  }
  .logoImg {
    width: 35px;
    height: 33px;
  }
  .tabTitle {
    font-size: 14px;
    margin: 0;
    font-weight: bold;
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
