import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

export const ProductCardComponent = styled.div`
  display: flex;
  width: 30%;
  border-radius: 35px;
  margin-bottom: 20px;
  margin-left: 30px;
  height: 230px;
  border: 1px solid ${Colors.gray};
  .name {
    font-size: 22px;
    margin: 10px 0;
    font-weight: bold;
  }
  .productImg {
    object-fit: cover;
    width: 50%;
    border-bottom-left-radius: 35px;
    border-top-left-radius: 35px;
  }
  .price {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 30px;
  }
  .productInfoContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 10px;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    background: linear-gradient(30deg, ${Colors.lightGray}, ${Colors.newGrey});
  }
  .detailsBtn {
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 8px 10px;
    cursor: pointer;
    width: 110px;
    margin-bottom: 10px;
    background: transparent;
    border: 1px solid ${Colors.black};
  }
  .detailsBtnText {
    font-weight: bold;
    font-size: 14px;    
    margin: 0;
    color: ${Colors.black};
  }
  .basketBtn {
    display: flex;
    align-items: center;
    border: none;
    width: 110px;
    background: ${Colors.black};
    border-radius: 10px;
    padding: 8px 10px;
    cursor: pointer;
  }
  .disabled {
    opacity: 0.3;
  }
  .basketBtnText {
    font-weight: bold;
    font-size: 14px;
    margin: 0;
    color: ${Colors.white};
  }
  .titlesContainer {
    height: 45%;
  }
  .btnsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
