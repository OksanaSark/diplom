import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

const ProfileTabSelectorComponent = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
    width: 90%;
  .tab {
    padding: 10px 25px;
    cursor: pointer;
    font-size: 18px;
  };
  .activeTab {
    background-color: ${Colors.black};
    color: ${Colors.white};
  };
`

export default ProfileTabSelectorComponent
