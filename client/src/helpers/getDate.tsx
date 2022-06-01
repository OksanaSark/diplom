import { IOrder } from '../services/types'

export const getDate = (date: IOrder['date']) => {
    return new Date(date).toLocaleDateString()
}
