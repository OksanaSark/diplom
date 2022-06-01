import { makeAutoObservable } from 'mobx'

import { RatingApiClass } from '../services/api/RatingApi'
import { productStore } from './ProductStore'
import { IRateInfo, StatusEnum } from '../services/types'

class RatingStore {
    private _status: StatusEnum

    constructor() {
        this._status = StatusEnum.initial
        makeAutoObservable(this)
    }

    get status() {
        return this._status
    }

    setStatus(status: StatusEnum) {
        this._status = status
    }

    async rateProduct(rateInfo: IRateInfo) {
        try {
            this.setStatus(StatusEnum.loading)
            const rating = await RatingApiClass.rateProduct(rateInfo)

            if (rating) {
                await productStore.getOneProduct(rateInfo.productId)
                this.setStatus(StatusEnum.success)
            } else {
                throw new Error('Rating was not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }
}

export const ratingStore = new RatingStore()
