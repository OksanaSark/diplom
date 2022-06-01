import { authAxiosConfig } from '../axios'
import { IRateInfo, IRating } from '../types'

export class RatingApiClass {
    static async rateProduct(rateInfo: IRateInfo): Promise<IRating | void> {
        try {
            const { data } = await authAxiosConfig.post('/rating', rateInfo)
            return data
        } catch (err) {
            const message = 'product rate error'
            throw new Error(message)
        }
    }
}
