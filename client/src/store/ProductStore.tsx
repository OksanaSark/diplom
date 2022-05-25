import { makeAutoObservable } from 'mobx'

import { ProductFormValues } from '../components/Profile/ProfileInfo/ProductForm'
import { ProductApiClass } from '../services/api/ProductApi'
import { IProduct, StatusEnum } from '../services/types/types'

class ProductStore {
    private _products: IProduct[]
    private _status: StatusEnum

    constructor() {
        this._products = []
        this._status = StatusEnum.initial
        makeAutoObservable(this)
    }

    get products() {
        return this._products
    }
    get status() {
        return this._status
    }

    setProducts(products: IProduct[]) {
        this._products = products
    }
    setStatus(status: StatusEnum) {
        this._status = status
    }

    async fetchProducts() {
        try {
            this.setStatus(StatusEnum.loading)
            const products = await ProductApiClass.getProducts()
            if (products) {
                this.setStatus(StatusEnum.success)
                this.setProducts(products)
            } else {
                throw new Error('Products were not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }

    async createProduct(values: ProductFormValues) {
        try {
            this.setStatus(StatusEnum.loading)
            const product = await ProductApiClass.createProduct(values)
            if (product) {
                this.setStatus(StatusEnum.success)
                this.setProducts([...this.products, product])
            } else {
                throw new Error('Product was not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }
}

export const productStore = new ProductStore()
