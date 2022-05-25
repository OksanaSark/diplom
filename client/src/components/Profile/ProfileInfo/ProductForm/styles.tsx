import { Colors } from '../../../../styles/colors'
import styled from 'styled-components'

const ProductFormComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .field {
    border: none;
    border-bottom: 2px solid ${Colors.darkGray};
    outline: none;
    width: 100%;
    font-size: 18px;
    padding: 5px;
    margin-bottom: 0;
  }
  .fieldMargin {
    margin: 15px 0;
  }
  .categorySelector {
    margin: 20px 0;
  }
  .imgField {
    border: none;
  }
  .errorMessage {
    color: red;
    font-size: 12px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  .imgBtn {
    background: ${Colors.black};
    margin: 20px 0;
  }
  .price::-webkit-outer-spin-button,
  .price::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .price[type=number] {
    -moz-appearance: textfield;
  }
`

export default ProductFormComponent
