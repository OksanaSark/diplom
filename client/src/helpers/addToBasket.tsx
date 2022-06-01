import { IProduct, StatusEnum } from '../services/types'
import { basketStore } from '../store/BasketStore'

export const addToBasket = async (productId: IProduct['id']) => {
    await basketStore.addProductToBasket(productId)
    await basketStore.setStatus(StatusEnum.initial)
}
