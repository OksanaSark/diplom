import { makeAutoObservable } from 'mobx'

import { ProductApiClass } from '../services/api/ProductApi'
import { IProduct, StatusEnum } from '../services/types/types'

class ProductStore {
    private _products: IProduct[]
    private _status: StatusEnum
    private _count: number
    private _page: number

    constructor() {
        this._products = []
        this._count = 0
        this._page = 1
        this._status = StatusEnum.initial
        makeAutoObservable(this)
    }

    get products() {
        return this._products
    }
    get status() {
        return this._status
    }
    get count() {
        return this._count
    }
    get page() {
        return this._page
    }

    setProducts(products: IProduct[]) {
        this._products = products
    }
    setStatus(status: StatusEnum) {
        this._status = status
    }
    setCount(count: number) {
        this._count = count
    }

    setPage(page: number) {
        this._page = page
    }

    async fetchProducts(categoryId?: IProduct['categoryId'], nextPage?: number) {
        try {
            this.setStatus(StatusEnum.loading)
            const products = await ProductApiClass.getProducts(categoryId, nextPage)

            if (nextPage && products) {
                this.setStatus(StatusEnum.success)
                this.setProducts([...this.products, ...products.rows])
                this.setPage(nextPage)
            } else if (products) {
                this.setStatus(StatusEnum.success)
                this.setProducts(products.rows)
                this.setCount(products.count)
                this.setPage(1)
            } else {
                throw new Error('Products were not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }

    async createProduct(values: FormData) {
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

    async deleteProduct(productId: IProduct['id']) {
        try {
            this.setStatus(StatusEnum.loading)
            const deletedProduct = await ProductApiClass.deleteProduct(productId)
            if (deletedProduct) {
                this.setStatus(StatusEnum.success)
                this.setProducts([...this.products.filter((product) => product.id !== deletedProduct.id)])
            } else {
                throw new Error('Product was not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }
}

export const productStore = new ProductStore()
