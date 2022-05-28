import { authAxiosConfig, axiosConfig } from '../axios'
import { IProduct, ProductListType } from '../types/types'

export class ProductApiClass {
    static async getProducts(categoryId?: IProduct['categoryId'], nextPage?: number): Promise<ProductListType | void> {
        try {
            const response = await axiosConfig.get<ProductListType>('/product', { params: { categoryId, nextPage } })
            return response.data
        } catch (err) {
            const message = 'products getting error'
            throw new Error(message)
        }
    }
    static async createProduct(values: FormData): Promise<IProduct | void> {
        try {
            const response = await authAxiosConfig.post<IProduct>('/product', values )
            return response.data
        } catch (err) {
            const message = 'product creation error'
            throw new Error(message)
        }
    }
    static async deleteProduct(productId: IProduct['id']): Promise<IProduct | void> {
        try {
            const response = await authAxiosConfig.delete<IProduct>(`/product/${productId}`)
            return response.data
        } catch (err) {
            const message = 'product creation error'
            throw new Error(message)
        }
    }
    static async getOneProduct(id: number, userId: number): Promise<IProduct | undefined> {
        try {
            const { data } = await axiosConfig.get('/product/' + id, { params: { userId } })
            return data
        } catch (e) {
            const message = ' product getting error'
            throw new Error(message)
        }
    }
}
