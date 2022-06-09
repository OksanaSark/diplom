import styled from 'styled-components'

export const ProductDetailsComponent = styled.div`
  display: flex;
  padding: 100px 150px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 1440px) {
    padding: 60px 80px;
  }
  @media (max-width: 1024px) {
    padding: 60px;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }
  .productContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 400px;
    @media (max-width: 1024px) {
      height: 420px;
    }
    @media (max-width: 768px) {
      height: fit-content;
    }
  }
  .productImg {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
  .imgContainer {
    width: 50%;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    width: 45%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .productTitle {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  .productDescription {
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  .productName {
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 20px;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  .productPrice {
    font-size: 28px;
    padding-bottom: 20px;
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 24px;
    }
  }
  .detailsContainer {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .detailContainer {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 32%;
  }
  .detailTitle {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }
  .details {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .detailsTitle {
    font-weight: bold;
    font-size: 22px;
  }
  .btnsContainer {
    width: 50%;
  }
`
