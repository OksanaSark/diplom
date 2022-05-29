import React, { useState } from 'react'

import BasketComponent from './styles'

export const Basket = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <BasketComponent>
            ORDERS
        </BasketComponent>
    )
}
