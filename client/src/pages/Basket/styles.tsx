import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const BasketComponent = styled.div`
  padding: 20px 200px;
  @media (max-width: 1440px) {
    padding: 20px 100px;
  }
  @media (max-width: 1024px) {
    padding: 20px 100px;
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
  }
  .totalContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 215px;
    width: 30%;
    border-radius: 15px;
    background: ${Colors.lightGray};
    padding-bottom: 20px;
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
  }
  .orderDescription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top: 4px solid ${Colors.white};
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
  }
  .emptyBasket {
    font-size: 22px;
    text-align: center;
  }
`
