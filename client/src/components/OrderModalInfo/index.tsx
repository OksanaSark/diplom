import React from 'react'
import { observer } from 'mobx-react-lite'

import { Strings } from './strings'
import { StatusEnum } from '../../services/types'
import { basketStore } from '../../store/BasketStore'
import { orderStore } from '../../store/OrderStore'
import { AuthButton } from '../AuthModal/AuthButton'

import { OrderModalInfoComponent, SuccessOrderComponent } from './styles'

export const OrderModalInfo = observer(() => {
    const isSuccess = orderStore.status === StatusEnum.success
    const isError = orderStore.status === StatusEnum.error

    if (isSuccess) {
        return (
            <SuccessOrderComponent>
                <p className='successTitle'>{Strings.successOrder}</p>
                <p className='successText'>{Strings.communicationWithManager}</p>
                <p className='successText'>{Strings.gratitude}</p>
            </SuccessOrderComponent>
        )
    }

    if (isError) {
        return <p>{Strings.errorMessage}</p>
    }

    return (
        <OrderModalInfoComponent>
            <p className='confirmationTitle'>{Strings.orderConfirmation}</p>
            <div className='orderDescription'>
                <p className='description'>{Strings.totalPrice} {basketStore.totalPrice} &#8381;</p>
                <p className='description'>{Strings.countOfPositions} {basketStore.products.length}</p>
            </div>
            <AuthButton className='loginBtn' text={Strings.confirm} onClick={() => orderStore.createOrder()} />
        </OrderModalInfoComponent>
    )
})
