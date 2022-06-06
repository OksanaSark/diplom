import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const OrderCardComponent = styled.div`
  display: flex;
  height: 155px;
  margin-bottom: 30px;
  border: 1px solid ${Colors.gray};
  border-radius: 25px;
  @media (max-width: 1024px) {
    height: 170px;
  }
  @media (max-width: 768px) {
    height: 120px;
    width: 275px;
  }
  .orderImg {
    object-fit: cover;
    width: 30%;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
  }
  .standardInfo {
    @media (max-width: 768px) {
      margin: 0;
    }
  }
  .orderInfoContainer {
    display: flex;
    width: 70%;
    background: ${Colors.lightGray};
    border-radius: 0 25px 25px 0;
    padding-bottom: 10px;
    @media (max-width: 768px) {
      width: 100%;
      border-radius: 25px;
    }
  }
  .orderName {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .orderPrice {
    font-size: 24px;
    margin-top: 15px;
    align-self: center;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .orderCount {
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: center;
  }
  .countImage {
    position: relative;
    z-index: 2;
    cursor: pointer
  }
  .countContainer {
    display: flex;
    margin-top: auto;
  }
  .orderInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
    width: 50%;
  }
  .btnsContainer {
    margin-left: auto;
    padding: 5px 10px;
  }
`
