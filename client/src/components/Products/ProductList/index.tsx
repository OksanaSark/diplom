import React from 'react'
import { CircularProgress } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { StatusEnum } from '../../../services/types'
import { productStore } from '../../../store/ProductStore'
import ProductCard from '../ProductCard'
import { Strings } from '../strings'

import { ProductListComponent } from './styles'

export interface ProductListProps {
    isCentred: boolean
}

export const ProductList = observer(() => {
    const isLoading = productStore.status === StatusEnum.loading
    const isError = productStore.status === StatusEnum.error
    const isCentred = isLoading || isError || !!productStore.products.length

    const renderProducts = () => {
        if (isLoading) {
            return <CircularProgress />
        }

        if (isError) {
            return <p>{Strings.errorMessage}</p>
        }

        if (productStore.products.length && !isLoading) {
            return productStore.products.map((product) => {
                return <ProductCard key={product.id} product={product} />
            })
        }

        return <p>{Strings.noProducts}</p>
    }

    return (
        <ProductListComponent isCentred={isCentred}>
            {renderProducts()}
        </ProductListComponent>
    )
})
