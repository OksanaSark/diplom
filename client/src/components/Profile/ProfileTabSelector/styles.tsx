import { Colors } from '../../../styles/colors'
import styled from 'styled-components'

const ProfileTabSelectorComponent = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid ${Colors.black};
    border-top: 2px solid ${Colors.black};
    width: 90%;
    align-items: center;
  .tabsContainer {
    display: flex;
    justify-content: center;
    width: 90%;
  }
  .logOutBtn {
    height: 35px;
    background: transparent;
    border: 2px solid ${Colors.black};
    width: 70px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 14px;
    color: ${Colors.black};
    cursor: pointer;
  }
  .tab {
    padding: 5px 25px;
    cursor: pointer;
    font-size: 18px;
  };
  .activeTab {
    background-color: ${Colors.black};
    color: ${Colors.white};
  };
`

export default ProfileTabSelectorComponent
