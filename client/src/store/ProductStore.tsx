import { makeAutoObservable } from 'mobx'

import { IProduct, StatusEnum } from '../servises/types/types'

class ProductStore {
    private _products: IProduct[]
    private _status: StatusEnum

    constructor() {
        this._products = [
            {
                id: 32341,
                name: 'Pipe',
                price: 32000,
                rating: { isRated: true, rate: 5 },
                info: { productId: 35, title: 'Полимерная труба для водоснабжения',
                    description: 'Вязкий и упругий материал выдерживает расширение из-за замерзания воды без потери свойств, не лопается при температуре до -400, чем удобен для монтажа зимой, переносит неаккуратное обращение...' },
                img: 'url....',
                categoryId: 234,
            },
            {
                id: 645,
                name: 'Pipe',
                price: 32000,
                rating: { isRated: true, rate: 5 },
                info: { productId: 35, title: 'Медная труба для водоснабжения',
                    description: 'Вязкий и упругий материал выдерживает расширение из-за замерзания воды без потери свойств, не лопается при температуре до -400, чем удобен для монтажа зимой, переносит неаккуратное обращение...' },
                img: 'url....',
                categoryId: 234,
            },
        ]
        this._status = StatusEnum.loading
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
}

export const productStore = new ProductStore()
