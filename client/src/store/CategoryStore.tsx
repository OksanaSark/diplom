import { makeAutoObservable } from 'mobx'

import { CategoryApiClass } from '../servises/api/CategoryApi'
import { ICategory, StatusEnum } from '../servises/types/types'

class CategoryStore {
    private _categories: ICategory[] = []
    private _status: StatusEnum

    constructor() {
        this._status = StatusEnum.loading
        makeAutoObservable(this)
    }

    get categories() {
        return this._categories
    }
    get status() {
        return this._status
    }

    setCategories(categories: ICategory[]) {
        this._categories = categories
    }
    setStatus(status: StatusEnum) {
        this._status = status
    }

    async fetchCategories() {
        try {
            this.setStatus(StatusEnum.loading)
            const data: ICategory[] = await CategoryApiClass.getCategories()
            this.setStatus(StatusEnum.success)
            this.setCategories(data)
        } catch (err) {
            console.log('fetchCategories')
            this.setStatus(StatusEnum.error)
        }
    }
}

export const categoryStore = new CategoryStore()
