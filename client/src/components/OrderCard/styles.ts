import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const OrderCardComponent = styled.div`
  display: flex;
  height: 140px;
  min-width: 60%;
  margin-bottom: 30px;
  border: 1px solid ${Colors.gray};
  border-radius: 25px;
  .orderImg {
    object-fit: cover;
    width: 30%;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
  }
  .orderInfoContainer {
    display: flex;
    width: 70%;
    background: ${Colors.lightGray};
    border-radius: 0 25px 25px 0;
  }
  .orderName {
    display: flex;
    font-size: 20px;
    font-weight: bold;
  }
  .orderPrice {
    font-size: 24px;
    margin-top: 15px;
    align-self: center;
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
    margin-left: 15px;
    width: 50%;
  }
  .btnsContainer {
    margin-left: auto;
    padding: 5px 10px;
  }
`
