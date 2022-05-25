import { CategoryFormValues } from '../../components/Profile/ProfileInfo/CategoryForm'
import { authAxiosConfig, axiosConfig } from '../axios'
import { ICategory } from '../types/types'

export class CategoryApiClass {
    static async getCategories(): Promise<ICategory[] | void> {
        try {
            const response = await axiosConfig.get<ICategory[]>('/category')
            return response.data
        } catch (err) {
            const message = 'category getting error'
            throw new Error(message)
        }
    }
    static async createCategory(values: CategoryFormValues): Promise<ICategory | void> {
        try {
            const response = await authAxiosConfig.post<ICategory>('/category', { name: values.categoryName })
            return response.data
        } catch (err) {
            const message = 'category creation error'
            throw new Error(message)
        }
    }
}
