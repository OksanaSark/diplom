import { makeAutoObservable } from 'mobx'

import { Filters } from '../components/Products'
import { ProductApiClass } from '../services/api/ProductApi'
import { userStore } from './UserStore'
import { IProduct, StatusEnum } from '../services/types'

class ProductStore {
    private _products: IProduct[]
    private _product: IProduct | null
    private _status: StatusEnum
    private _count: number
    private _page: number
    private _limit: number

    constructor() {
        this._products = []
        this._product = null
        this._count = 0
        this._page = 1
        this._limit = 9
        this._status = StatusEnum.initial
        makeAutoObservable(this)
    }

    get products() {
        return this._products
    }
    get product() {
        return this._product
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
    get limit() {
        return this._limit
    }

    setProducts(products: IProduct[]) {
        this._products = products
    }
    setProduct(product: IProduct) {
        this._product = product
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

    async fetchProducts(categoryId?: IProduct['categoryId'], page?: number, limit = 9) {
        try {
            this.setStatus(StatusEnum.loading)
            const products = await ProductApiClass.getProducts(categoryId, page, limit)

            if (page && products) {
                this.setStatus(StatusEnum.success)
                this.setProducts(products.rows)
                this.setCount(products.count)
                this.setPage(page)
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

    async getProductById(productId: IProduct['id']) {
        try {
            this.setStatus(StatusEnum.loading)
            const product = await ProductApiClass.getProductById(productId, userStore.user?.id)

            if (product) {
                this.setStatus(StatusEnum.success)
                this.setProduct(product)
            } else {
                throw new Error('Product was not returned')
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

    async filterProducts(filter: keyof typeof Filters, categoryId?: IProduct['categoryId']) {
        const filters = {
            update: () => this.fetchProducts(categoryId),
            rating: () => this.setProducts(this.products.sort((a, b) => a.rateInfo.rate < b.rateInfo.rate ? 1 : -1)),
            cheapPrice: () => this.setProducts(this.products.sort((a, b) => a.price > b.price ? 1 : -1)),
            expensivePrice: () => this.setProducts(this.products.sort((a, b) => a.price > b.price ? -1 : 1)),
        }

        return filters[filter as keyof typeof Filters]()
    }
}

export const productStore = new ProductStore()
