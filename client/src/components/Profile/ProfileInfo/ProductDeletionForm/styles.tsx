import { Icons } from '../../../../assets/media/icons/Icons'

import { Colors } from '../../../../styles/colors'
import styled from 'styled-components'

export const ProductDeletionFormComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  .errorMessage {
    color: red;
    font-size: 12px;
  };
  .title {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }
  .productContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .productName {
    width: 85%;
    border: 1px solid ${Colors.gray};
    padding: 10px;
    border-radius: 15px;
    margin: 0;
  }
  .categorySelector {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .deleteBtn {
    border: none;
    width: 10%;
    background: url(${Icons.DeleteInfo}) no-repeat 50% 50%;
  }
`
