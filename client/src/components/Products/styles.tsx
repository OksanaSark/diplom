import { Colors } from '../../styles/colors'
import styled from 'styled-components'

export const ProductsComponent = styled.div`
  display: flex;
  margin-top: 30px;
  border-top: 1px solid ${Colors.gray};
  padding-top: 20px ;
  .categoriesContainer {
    display: flex;
    flex-direction: column;
    width: 15%;
  }
  .category {
    font-size: 18px;
    padding: 10px 5px;
    margin: 0;
    cursor: pointer;
    display: inline-block;
  }
  .activeCategory {
    border-left: 4px solid black;
    font-weight: bold;
  }
  .productsContainer {
    display: flex;
    flex-direction: column;
    width: 85%;
  }
  .filtersContainer {
    display: flex;
    align-items: center;
    margin-left: 50px;
  }
  .filterTitle {
    font-size: 18px;
    margin-right: 15px;
    color: ${Colors.grey};
  }
  .filter {
    display: flex;
    align-items: center;
    margin-left: 25px;
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    height: 40px;
  }
  .filterName {
    margin: 0;
    padding-right: 10px;
    font-weight: normal;
  }
  .downArrow {
    height: 10px;
    width: 10px;
  }
  .categoryContainer {
    width: 100%;
    padding: 5px 10px;
  }
  .categoryTitle {
    font-size: 20px;
    font-weight: bold;
  }
`
