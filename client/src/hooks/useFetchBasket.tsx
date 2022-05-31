import { useEffect } from 'react'

import { StatusEnum } from '../services/types'
import { basketStore } from '../store/BasketStore'
import { userStore } from '../store/UserStore'

export const useFetchBasket = () => {
    useEffect(() => {
        if (userStore.isAuth) {
            basketStore.fetchBasket(userStore.user!.id).then(() => basketStore.setStatus(StatusEnum.initial))
        }
    }, [userStore.isAuth])
}
