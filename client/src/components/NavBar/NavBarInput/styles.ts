import styled from 'styled-components'

import { Icons } from '../../../assets/media/icons/Icons'
import { Colors } from '../../../styles/colors'

const NavBarInputComponent = styled.div`
  border: 2px solid ${Colors.lighterGray};
  background-color: ${Colors.lightGray};
  border-radius: 12px;
  display: flex;
  padding: 3px 15px;
  width: 40%;
  height: 35px;
  @media (max-width: 1440px) {
    width: 45%;
  }
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  .searchContainer{
    display: flex;
    align-items: center;
    width: 100%;
  }
  .field {
    border: none;
    outline: none;
    font-size: 14px;
    width: 95%;
    background-color: ${Colors.lightGray};
  };
  .field::-webkit-search-cancel-button { display: none; };
  .field::-webkit-input-placeholder { color: #C4C4C4; };
  .field::-moz-placeholder { color: #C4C4C4; };
  .searchIcon {
    border: none;
    outline: none;
    background: url(${Icons.Search}) no-repeat 50% 50%;
    width: 23px;
    height: 20px;
  };
`

export default NavBarInputComponent