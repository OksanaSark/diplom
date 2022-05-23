import { axiosConfig } from '../axios'
import { ICategory } from '../types/types'

export class CategoryApiClass {
    static async getCategories(): Promise<ICategory[]> {
        try {
            const response = await axiosConfig.get<ICategory[]>('/category')
            return response.data
        } catch (err) {
            const message = 'Getting categories error'
            throw new Error(message)
        }
    }
}
