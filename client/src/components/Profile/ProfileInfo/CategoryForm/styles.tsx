import { Colors } from '../../../../styles/colors'
import styled from 'styled-components'

export const CategoryFormComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  .field {
    border: none;
    border-bottom: 2px solid ${Colors.darkGray};
    outline: none;
    width: 100%;
    font-size: 18px;
    padding: 5px;
    margin-bottom: 0;
  };
  .fieldMargin {
    margin: 15px 0;
  }
  .errorMessage {
    color: red;
    font-size: 12px;
  };
  .title {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  .categoryContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .categoryName {
    width: 85%;
    border: 1px solid ${Colors.grey};
    padding: 10px;
    border-radius: 15px;
    margin: 0;
  }
`
