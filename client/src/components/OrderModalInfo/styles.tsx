import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const OrderModalInfoComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  .ratingTitle {
    font-size: 22px;
    text-align: center;
  }
  .confirmationTitle {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
  }
  .successOrder {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 0 40px;
  }
  .orderDescription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 4px solid ${Colors.white};
  }
  .description {
    margin: 5px;
    font-size: 18px;
  }
`

export const SuccessOrderComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .successTitle {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
  }
  .successText {
    font-size: 18px;
    text-align: center;
  }
`
