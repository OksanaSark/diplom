import { ProductListProps } from './index'

import styled from 'styled-components'

export const ProductListComponent = styled.div<ProductListProps>`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: ${(props) => props.isCentred && 'center'};
`
