import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

export const ProductCardComponent = styled.div`
  display: flex;
  min-width: 380px;
  width: 30%;
  border-radius: 35px;
  margin-bottom: 20px;
  margin-left: 30px;
  height: 230px;
  border: 1px solid ${Colors.gray};
  @media (max-width: 1660px) {
    min-width: 300px;
  }
  @media (max-width: 1315px) {
    min-width: 260px;
  }
  @media (max-width: 1210px) {
    min-width: 340px;
  }
  @media (max-width: 980px) {
    min-width: 430px;
    margin-left: 100px;
  }
  @media (max-width: 768px) {
    min-width: 260px;
    margin-left: 100px;
  }
  .name {
    font-size: 22px;
    margin: 10px 0;
    font-weight: bold;
    @media (max-width: 1660px) {
      font-size: 20px;
    }
    @media (max-width: 1315px) {
      font-size: 18px;
    }
    @media (max-width: 1210px) {
      font-size: 20px;
    }
  }
  .productImg {
    object-fit: cover;
    width: 50%;
    border-bottom-left-radius: 35px;
    border-top-left-radius: 35px;
    @media (max-width: 1660px) {
      width: 40%;
    }
    @media (max-width: 1315px) {
      width: 35%;
    }
    @media (max-width: 1210px) {
      width: 45%;
    }
    @media (max-width: 980px) {
      width: 55%;
    }
    @media (max-width: 768px) {
      width: 35%;
    }
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
    background: linear-gradient(30deg, ${Colors.lightGray}, ${Colors.grey});
    @media (max-width: 1660px) {
      width: 60%;
    }
    @media (max-width: 1315px) {
      width: 65%;
    }
    @media (max-width: 1210px) {
      width: 55%;
    }
    @media (max-width: 980px) {
      width: 45%;
    }
    @media (max-width: 768px) {
      width: 65%;
    }
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
