import React from 'react'
import { Rating } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { Strings } from './strings'
import { Icons } from '../../assets/media/icons/Icons'
import { IAddedProducts, StatusEnum } from '../../services/types'
import { basketStore } from '../../store/BasketStore'
import { TooltipButton } from '../TooltipButton'

import { OrderCardComponent } from './styles'

interface OrderCardProps {
    order: IAddedProducts
}

export const OrderCard = observer((props: OrderCardProps) => {
    const { order } = props
    const standartInfo = order.info[1].description

    const updateProductCount = (id: IAddedProducts['id'], count: IAddedProducts['count']) => {
        basketStore.updateProductCount(id, count).then(() => basketStore.setStatus(StatusEnum.initial))
    }

    const deleteProduct = (id: IAddedProducts['id']) => {
        basketStore.deleteProductFromBasket(id).then(() => basketStore.setStatus(StatusEnum.initial))
    }

    return (
        <OrderCardComponent>
            <img className='orderImg' src={`${process.env.REACT_APP_LOCALHOST_URL}${order.img}`} />
            <div className='orderInfoContainer'>
                <div className='orderInfo'>
                    <p className='orderName'>{order.name}</p>
                    <p>{standartInfo}</p>
                    <Rating readOnly name="read-only" size='large' value={order.rateInfo.rate} />
                </div>
                <div className='orderCount'>
                    <p className='orderPrice'>{order.price * order.count} &#8381;</p>
                    <div className='countContainer'>
                        <TooltipButton
                            title={Strings.add}
                            src={Icons.Plus}
                            onClick={() => updateProductCount(order.id, order.count + 1)}
                        />
                        <p>{order.count}</p>
                        <TooltipButton
                            disabled={order.count === 1}
                            title={Strings.delete}
                            src={Icons.Minus}
                            onClick={() => updateProductCount(order.id, order.count - 1)}
                        />
                    </div>
                </div>
                <div className='btnsContainer'>
                    <TooltipButton title={Strings.delete} src={Icons.Bin} onClick={() => deleteProduct(order.id)} />
                </div>
            </div>
        </OrderCardComponent>
    )
})
