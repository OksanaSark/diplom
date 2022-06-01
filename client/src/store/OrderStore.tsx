import { makeAutoObservable } from 'mobx'

import { OrderApiClass } from '../services/api/OrderApi'
import { basketStore } from './BasketStore'
import { userStore } from './UserStore'
import { IOrder, IUser, StatusEnum } from '../services/types'

class OrderStore {
    private _status: StatusEnum
    private _orders: IOrder[]

    constructor() {
        this._status = StatusEnum.initial
        this._orders = []
        makeAutoObservable(this)
    }

    get orders() {
        return this._orders
    }
    get status() {
        return this._status
    }

    setStatus(status: StatusEnum) {
        this._status = status
    }
    setOrders(orders: IOrder[]) {
        this._orders = orders
    }

    async createOrder() {
        try {
            this.setStatus(StatusEnum.loading)
            if (userStore.user) {
                const userId = userStore.user.id
                const basketId = basketStore.id
                const order = await OrderApiClass.createOrder(basketId, userId)

                if (order) {
                    await basketStore.fetchBasket(userId)
                    await this.fetchOrders(userId)
                    this.setStatus(StatusEnum.success)
                } else {
                    throw new Error('Order was not returned')
                }
            }
        } catch (e) {
            this.setStatus(StatusEnum.error)
        }
    }

    async fetchOrders(userId: IUser['id']) {
        try {
            this.setStatus(StatusEnum.loading)
            const orders = await OrderApiClass.getOrders(userId)

            if (orders) {
                this.setOrders(orders)
                this.setStatus(StatusEnum.success)
            } else {
                throw new Error('Orders were not returned')
            }
        } catch (e) {
            this.setStatus(StatusEnum.error)
        }
    }
}

export const orderStore = new OrderStore()
