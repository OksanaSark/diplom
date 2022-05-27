import { makeAutoObservable } from 'mobx'

import { CategoryFormValues } from '../components/Profile/ProfileInfo/CategoryForm'
import { CategoryApiClass } from '../services/api/CategoryApi'
import { ICategory, StatusEnum } from '../services/types/types'

class CategoryStore {
    private _categories: ICategory[] = []
    private _status: StatusEnum
    private _selectedCategory: ICategory | null

    constructor() {
        this._status = StatusEnum.initial
        this._selectedCategory = null
        makeAutoObservable(this)
    }

    get categories() {
        return this._categories
    }
    get status() {
        return this._status
    }
    get selectedCategory() {
        return this._selectedCategory
    }

    setCategories(categories: ICategory[]) {
        this._categories = categories
    }
    setStatus(status: StatusEnum) {
        this._status = status
    }
    setSelectedCategory(category: ICategory | null) {
        this._selectedCategory = category
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
