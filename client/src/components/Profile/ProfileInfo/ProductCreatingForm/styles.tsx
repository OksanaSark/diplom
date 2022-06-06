import { Colors } from '../../../../styles/colors'
import styled from 'styled-components'

export const ProductCreatingForm = styled.div`
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
    font-size: 16px;
    padding: 5px;
    margin-bottom: 0;
  }
  .fieldMargin {
    margin: 15px 0;
  }
  .categorySelector {
    width: 100%;
    height: 55px;
    padding: 5px 10px;
    border-radius: 15px;
    color: ${Colors.grey};
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 10px;
    outline: none;
    border: 2px solid ${Colors.gray};
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
  .formBtn {
    width: 235px;
    margin: 20px 0;
  }
  .price::-webkit-outer-spin-button,
  .price::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .infoContainer {
    display: flex;
    width: 100%;
    margin: 5px 0;
  }
  .infoTitle {
    max-width: 35%;
    border: 1px solid ${Colors.gray};
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
  }
  .infoDescription {
    width: 65%;
    border: 1px solid ${Colors.gray};
    padding: 10px;
    margin-left: 10px;
    border-radius: 15px;
    font-size: 16px;
  }
  .imgPreview {
    display: flex;
    align-items: center;
  }
  .price[type=number] {
    -moz-appearance: textfield;
  }
  .imgName {
    margin: 0 6px;
  }
`
