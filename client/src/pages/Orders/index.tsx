import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { Strings } from './strings'
import { getDate } from '../../helpers/getDate'
import { orderStore } from '../../store/OrderStore'
import { userStore } from '../../store/UserStore'

import { OrdersComponent } from './styles'

export const Orders = observer(() => {
    useEffect(() => {
        if (userStore.user) {
            orderStore.fetchOrders(userStore.user.id)
        }
    }, [])

    const renderOrders = () => {
        if (orderStore.orders.length) {
            return orderStore.orders.map((order) => {
                return (
                    <div key={order.id} className='orderContainer'>
                        <div className='orderHeader'>
                            <p className='orderCode'>{Strings.orderCode} {order.id}</p>
                            <p>{getDate(order.date)}</p>
                        </div>
                        <div className='productsContainer'>
                            {order.products.map((product, index) => {
                                return (
                                    <div key={product.id} className='productContainer'>
                                        <p className='productText'>{index + 1}. {product.name} - {product.count} {Strings.piece}</p>
                                        <p className='productText'>{product.price}  &#8381;</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='totalPriceContainer'>
                            <p className='totalPrice'>{Strings.totalPrice}</p>
                            <p className='totalPrice'>{order.totalPrice} &#8381;</p>
                        </div>
                    </div>
                )
            })

            return <p>{Strings.emptyOrders}</p>
        }
    }

    return (
        <OrdersComponent>
            <p className='ordersTitle'>{Strings.orders}</p>
            <div className='ordersContainer'>
                {renderOrders()}
            </div>
        </OrdersComponent>
    )
})
