import { makeAutoObservable } from 'mobx'

import { BasketApiClass } from '../services/api/BasketApi'
import { userStore } from './UserStore'
import { IAddedProducts, StatusEnum } from '../services/types'

class BasketStore {
    private _id: number
    private _totalPrice: number
    private _products: IAddedProducts[]
    private _status: StatusEnum

    constructor() {
        this._id = 0
        this._totalPrice = 0
        this._products = []
        this._status = StatusEnum.initial
        makeAutoObservable(this)
    }

    get id() {
        return this._id
    }
    get products() {
        return this._products
    }
    get totalPrice() {
        return this._totalPrice
    }
    get status() {
        return this._status
    }

    setStatus(status: StatusEnum) {
        this._status = status
    }
    setId(id: number) {
        this._id = id
    }
    setProducts(products: IAddedProducts[]) {
        this._products = products
    }
    setTotalPrice(totalPrice: number) {
        this._totalPrice = totalPrice
    }

    async fetchBasket(userId: number) {
        try {
            this.setStatus(StatusEnum.loading)
            const basket = await BasketApiClass.getBasket(userId)

            if (basket) {
                basketStore.setId(basket.id)
                basketStore.setProducts(basket.products)
                basketStore.setTotalPrice(basket.totalPrice)
            } else {
                throw new Error('Basket was not returned')
            }

            this.setStatus(StatusEnum.success)
        } catch (e) {
            this.setStatus(StatusEnum.error)
        }
    }

    async updateProductCount(productId: number, count: number) {
        try {
            this.setStatus(StatusEnum.loading)
            const updatedProduct = await BasketApiClass.updateProductCount(productId, this._id, count)

            if (updatedProduct) {
                const newBasket = this._products.map((product: IAddedProducts) => {
                    return product.id === productId ? { ...product, count } : product
                })
                await this.fetchBasket(userStore.user!.id)

                this.setProducts(newBasket)
                this.setStatus(StatusEnum.success)
            } else {
                throw new Error('Updated product was not returned')
            }
        } catch (e) {
            this.setStatus(StatusEnum.error)
        }
    }

    async deleteProductFromBasket(productId: number) {
        try {
            this.setStatus(StatusEnum.loading)
            const deletedProduct = await BasketApiClass.deleteProduct(productId, this._id)

            if (deletedProduct) {
                const newBasket = this._products.filter((product: IAddedProducts) => (
                    product.id !== productId
                ))

                this.setProducts(newBasket)
                this.setStatus(StatusEnum.success)
            } else {
                throw new Error('Deleted product was not returned')
            }
        } catch (e) {
            this.setStatus(StatusEnum.error)
        }
    }

    async addProductToBasket(productId: number) {
        try {
            this.setStatus(StatusEnum.loading)
            const addedProduct = await BasketApiClass.addProduct(productId, this._id)

            if (addedProduct) {
                await this.fetchBasket(userStore.user!.id)
                this.setStatus(StatusEnum.success)
            } else {
                throw new Error('Added product was not returned')
            }
        } catch (e) {
            this.setStatus(StatusEnum.error)
        }
    }
}

export const basketStore = new BasketStore()
