import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const OrdersComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 200px;
  width: 100%;
  @media (max-width: 1440px) {
    padding: 20px 100px;
  }
  @media (max-width: 1024px) {
    padding: 20px 50px;
  }
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
  .ordersContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
  }
  .orderContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    border-radius: 20px;
    width: 60%;
    background: ${Colors.lightGray};
    @media (max-width: 1440px) {
      width: 65%;
    }
    @media (max-width: 1024px) {
      width: 70%;
    }
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  .ordersTitle {
    font-size: 24px;
    font-weight: bold;
  }
  .orderCode {
    font-weight: normal;
  }
  .productsContainer {
    padding: 10px;
  }
  .productContainer {
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    margin: 0;
  }
  .productText {
    margin: 0;
  }
  .orderHeader {
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    border-radius: 20px 20px 0 0;
    color: ${Colors.white};
    background: ${Colors.black};
  }
  .totalPriceContainer {
    display: flex;
    justify-content: space-between;
    border-top: 5px solid ${Colors.white};
  }
  .totalPrice {
    margin: 0;
    padding: 15px;
    text-align: center;
  }
  .emptyOrders {
    font-size: 22px;
    text-align: center;
  }
`
