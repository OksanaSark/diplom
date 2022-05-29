import styled from 'styled-components'

const ProductDetailsComponent = styled.div`
  display: flex;
  padding: 100px 150px;
  width: 100%;
  flex-direction: column;
  .productContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 400px;
  }
  .productImg {
    width: 100%;
    height: 400px;
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
  }
  .productTitle {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  .productDescription {
    font-size: 16px;
  }
  .productName {
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 20px;
    margin: 0;
  }
  .productPrice {
    font-size: 28px;
    padding-bottom: 20px;
    margin: 0;
  }
  .detailsContainer {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .detailContainer {
    display: flex;
    flex-direction: column;
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

export default ProductDetailsComponent
