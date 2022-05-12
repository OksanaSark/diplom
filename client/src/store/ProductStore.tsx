import { makeAutoObservable } from 'mobx'

import { ICategory, IProduct } from '../servises/types/types'

export default class ProductStore {
    private _categories: ICategory[]
    private _products: IProduct[]

    constructor() {
        this._categories = [
            {
                id: 546,
                name: 'Copper',
            },
        ]
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
        makeAutoObservable(this)
    }

    setCategories(categories: ICategory[]) {
        this._categories = categories
    }
    setProducts(products: IProduct[]) {
        this._products = products
    }

    get categories() {
        return this._categories
    }
    get products() {
        return this._products
    }
}
