import React from 'react'
import { CircularProgress } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { StatusEnum } from '../../../services/types'
import { productStore } from '../../../store/ProductStore'
import { Strings } from '../../OrderModalInfo/strings'
import ProductCard from '../ProductCard'

import { ProductListComponent } from './styles'

export const ProductList = observer(() => {
    const isLoading = productStore.status === StatusEnum.loading
    const isError = productStore.status === StatusEnum.error

    return (
        <ProductListComponent>
            {isLoading && <CircularProgress />}
            {isError && <p>{Strings.errorMessage}</p>}
            {productStore.products.map((product) => {
                return <ProductCard key={product.id} product={product} />
            })}
        </ProductListComponent>
    )
})
