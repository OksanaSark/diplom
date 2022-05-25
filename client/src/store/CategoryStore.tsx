import { makeAutoObservable } from 'mobx'

import { CategoryFormValues } from '../components/Profile/ProfileInfo/CategoryForm'
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
            const categories = await CategoryApiClass.getCategories()
            if (categories) {
                this.setStatus(StatusEnum.success)
                this.setCategories(categories)
            } else {
                throw new Error('Categories were not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }

    async createCategory(values: CategoryFormValues) {
        try {
            this.setStatus(StatusEnum.loading)
            const category = await CategoryApiClass.createCategory(values)
            if (category) {
                this.setStatus(StatusEnum.success)
                this.setCategories([...this.categories, category])
            } else {
                throw new Error('Category was not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }
}

export const categoryStore = new CategoryStore()
