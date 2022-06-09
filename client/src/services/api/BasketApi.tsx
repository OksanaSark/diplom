import { Routes } from '../../routes'
import { authAxiosConfig } from '../axios'
import { IAddedProducts } from '../types'

type BasketType = {
    id: number,
    products: IAddedProducts[],
    totalPrice: number
};

export class BasketApiClass {
    static async getBasket(userId: number): Promise<BasketType | undefined> {
        try {
            const { data } = await authAxiosConfig.get(`${Routes.BasketRoute}`, { params: { userId } })
            return data
        } catch (e) {
            const message = 'basket getting error'
            throw new Error(message)
        }
    }

    static async updateProductCount(
        productId: number,
        orderId: number,
        count: number,
    ): Promise<number | undefined> {
        try {
            const { data } = await authAxiosConfig.patch(`${Routes.BasketRoute}`, { productId, orderId, count })
            return data
        } catch (e) {
            const message = 'update product count error'
            throw new Error(message)
        }
    }

    static async deleteProduct(productId: number, orderId: number): Promise<number | undefined> {
        try {
            const { data } = await authAxiosConfig.delete(`${Routes.BasketRoute}`, { params: { productId, orderId } })
            return data
        } catch (e) {
            const message = 'error deleting product from orders'
            throw new Error(message)
        }
    }

    static async addProduct(productId: number, orderId: number): Promise<number | undefined> {
        try {
            const { data } = await authAxiosConfig.post(`${Routes.BasketRoute}`, { productId, orderId })
            return data
        } catch (e) {
            const message = 'error adding product to orders'
            throw new Error(message)
        }
    }
}
