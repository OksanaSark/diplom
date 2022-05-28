import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ProductApiClass } from '../../services/api/ProductApi'
import { IProduct } from '../../services/types/types'
import { userStore } from '../../store/UserStore'

import ProductDetailsComponent from './styles'

interface stateType {
    productId: IProduct['id']
}

export const ProductDetails = () => {
    const location = useLocation()
    const { productId } = location.state as stateType
    const [product, setProduct] = useState<IProduct | null>(null)

    const getProduct = async () => {
        try {
            const product = await ProductApiClass.getOneProduct(productId, userStore.user!.id)
            if (product) {
                setProduct(product)
            }
        } catch (err) {
            console.log('product getting error')
            return <p>Что-то пошло не так, повторите позже</p>
        }
    }

    useEffect(() => {
        getProduct().then()
    }, [])

    return (
        <ProductDetailsComponent>
            {product?.name}
        </ProductDetailsComponent>
    )
}
