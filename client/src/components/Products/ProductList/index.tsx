import React from 'react'
import { observer } from 'mobx-react-lite'

import { productStore } from '../../../store/ProductStore'
import ProductCard from '../ProductCard'

import { ProductListComponent } from './styles'

export const ProductList = observer(() => {
    return (
        <ProductListComponent>
            {productStore.products.map((product) => {
                return <ProductCard key={product.id} product={product} />
            })}
        </ProductListComponent>
    )
})
