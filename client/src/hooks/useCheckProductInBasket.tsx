import { useMemo } from 'react'

import { IProduct } from '../services/types'

export const useCheckProductInBasket = (products: IProduct[], productId: IProduct['id'] | undefined) => {
    return useMemo(() => {
        return products.some((item) => item.id === productId)
    }, [products, productId])
}
