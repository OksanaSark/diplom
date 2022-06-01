import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { OrderCard } from '../../components/OrderCard'
import { OrderModalInfo } from '../../components/OrderModalInfo'
import { AdminModal } from '../../components/Profile/AdminModal'
import { useFetchBasket } from '../../hooks/useFetchBasket'
import { Strings } from './strings'
import { StatusEnum } from '../../services/types'
import { basketStore } from '../../store/BasketStore'
import { orderStore } from '../../store/OrderStore'

import { BasketComponent } from './styles'

export const Basket = observer(() => {
    useFetchBasket()
    const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false)
    const orders = basketStore.products

    const openOrderModal = () => {
        setIsOrderModalOpen(true)
    }

    const closeOrderModal = () => {
        setIsOrderModalOpen(false)
        orderStore.setStatus(StatusEnum.initial)
    }

    const renderBasketContent = () => {
        if (orders.length) {
            return <div className='basketContainer'>
                <div className='ordersContainer'>
                    {orders.map((order) => <OrderCard key={order.id} order={order} />)}
                </div>
                <div className='totalContainer'>
                    <p className='totalTitle'>{Strings.ordering}</p>
                    <div className='orderDescription'>
                        <p className='description'>{Strings.totalPrice} {basketStore.totalPrice} &#8381;</p>
                        <p className='description'>{Strings.countOfPositions} {orders.length}</p>
                    </div>
                    <button className='orderingBtn' onClick={openOrderModal}>{Strings.createOrder}</button>
                </div>
            </div>
        }

        return <p className='emptyBasket'>{Strings.emptyBasket}</p>
    }

    return (
        <BasketComponent>
            <p className='basketTitle'>{Strings.basket}</p>
            {renderBasketContent()}
            <AdminModal
                children={<OrderModalInfo />}
                isModalOpen={isOrderModalOpen}
                closeModal={closeOrderModal}
            />
        </BasketComponent>
    )
})
