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
    font-size: 20px;
    padding: 10px 30px;
    //border-radius: 10px;
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
  }
  .filterTitle {
    font-size: 18px;
    color: ${Colors.newGrey};
  }
  .filter {
    margin-left: 35px;
    border: 1px solid ${Colors.newGrey};
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
  }
  .categoryContainer {
    width: 100%;
    padding: 5px 10px;
  }
  .activeFilter {
    background: linear-gradient(to left, ${Colors.newGrey} 10%, ${Colors.gray} 75%);  
  }
  .categoryTitle {
    font-size: 20px;
    font-weight: bold;
  }
`
