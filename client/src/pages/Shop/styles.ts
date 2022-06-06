import styled from 'styled-components'

export const ShopComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 150px;
  @media (max-width: 1760px) {
    padding: 20px 70px;
  }
  @media (max-width: 1440px) {
    padding: 20px 50px;
  }
  @media (max-width: 1024px) {
    padding: 20px 30px;
  }
  .paginationContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
