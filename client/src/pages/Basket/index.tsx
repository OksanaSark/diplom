import React from 'react'
import { observer } from 'mobx-react-lite'

import { OrderCard } from '../../components/OrderCard'
import { useFetchBasket } from '../../hooks/useFetchBasket'
import { Strings } from './strings'
import { basketStore } from '../../store/BasketStore'

import BasketComponent from './styles'

export const Basket = observer(() => {
    useFetchBasket()

    const orders = basketStore.products

    const renderBasketContent = () => {
        if (orders.length) {
            return orders.map((order) => <OrderCard key={order.id} order={order} />)
        }

        return <p>{Strings.emptyBasket}</p>
    }

    return (
        <BasketComponent>
            <p className='basketTitle'>{Strings.basket}</p>
            <div className='basketContainer'>
                <div className='ordersContainer'>
                    {renderBasketContent()}
                </div>
                <div className='totalContainer'>
                    <p className='totalTitle'>{Strings.ordering}</p>
                    <div className='orderDescription'>
                        <p className='description'>{Strings.totalPrice} {basketStore.totalPrice} &#8381;</p>
                        <p className='description'>{Strings.countOfPositions} {orders.length}</p>
                    </div>
                    <button className='orderingBtn'>{Strings.createOrder}</button>
                </div>
            </div>
        </BasketComponent>
    )
})
