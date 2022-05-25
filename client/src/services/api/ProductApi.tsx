import { ProductFormValues } from '../../components/Profile/ProfileInfo/ProductForm'
import { authAxiosConfig, axiosConfig } from '../axios'
import { IProduct } from '../types/types'

export class ProductApiClass {
    static async getProducts(): Promise<IProduct[] | void> {
        try {
            const response = await axiosConfig.get<IProduct[]>('/product')
            return response.data
        } catch (err) {
            const message = 'products getting error'
            throw new Error(message)
        }
    }
    static async createProduct(values: ProductFormValues): Promise<IProduct | void> {
        try {
            const response = await authAxiosConfig.post<IProduct>('/product', values )
            return response.data
        } catch (err) {
            const message = 'product creation error'
            throw new Error(message)
        }
    }
}
