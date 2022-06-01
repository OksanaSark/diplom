import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const OrdersComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 200px;
  width: 100%;
  @media (max-width: 1440px) {
    padding: 30px 100px;
  }
  @media (max-width: 1024px) {
    padding: 30px 100px;
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
    width: 50%;
    background: ${Colors.lightGray};
  }
  .ordersTitle {
    font-size: 20px;
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
`
