import { authAxiosConfig } from '../axios'
import { IOrder, IUser } from '../types'

export class OrderApiClass {
    static async createOrder(orderId: IOrder['id'], userId: IUser['id']): Promise<IOrder> {
        try {
            const { data } = await authAxiosConfig.patch('/order', { orderId, userId })
            return data
        } catch (err) {
            const message = 'order creation error'
            throw new Error(message)
        }
    }
    static async getOrders(userId: IUser['id']): Promise<IOrder[] | void> {
        try {
            const { data } = await authAxiosConfig.patch('/order', { params: { userId } })
            return data
        } catch (err) {
            const message = 'orders getting error'
            throw new Error(message)
        }
    }
}
