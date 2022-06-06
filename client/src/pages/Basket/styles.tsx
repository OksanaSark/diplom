import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const BasketComponent = styled.div`
  padding: 20px 200px;
  @media (max-width: 1440px) {
    padding: 20px 100px;
  }
  @media (max-width: 1260px) {
    padding: 20px 35px;
  }
  @media (max-width: 1024px) {
    padding: 20px 30px;
  }
  @media (max-width: 768px) {
    padding: 20px 25px;
  }
  .basketTitle {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-bottom: 50px;
  }
  .basketContainer {
    display: flex;
    justify-content: space-between;
  }
  .ordersContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    @media (max-width: 1260px) {
      width: 66%;
    }
    @media (max-width: 1024px) {
      width: 55%;
    }
  }
  .totalContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 230px;
    width: 30%;
    border-radius: 15px;
    background: ${Colors.lightGray};
    padding: 10px;
    @media (max-width: 1260px) {
      width: 30%;
    }
    @media (max-width: 768px) {
      width: 40%;
    }
  }
  .totalTitle {
    padding: 15px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    background: ${Colors.lightGray};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .orderDescription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top: 4px solid ${Colors.white};
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .description {
    margin: 5px;
  }
  .orderingBtn {
    cursor: pointer;
    height: 55px;
    border-radius: 10px;
    font-size: 16px;
    width: 50%;
    color: ${Colors.black};
    background: transparent;
    border: 1px solid ${Colors.gray};
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  .emptyBasket {
    font-size: 22px;
    text-align: center;
  }
`
