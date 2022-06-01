import React, { useState } from 'react'
import { Rating } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { Strings } from '../../pages/ProductDetails/strings'
import { IProduct, StatusEnum } from '../../services/types'
import { ratingStore } from '../../store/RatingStore'
import { userStore } from '../../store/UserStore'
import { AuthButton } from '../AuthModal/AuthButton'

import { RatingModalInfoComponent } from './styles'

interface RatingModalInfoProps {
    product: IProduct
}

export const RatingModalInfo = observer((props: RatingModalInfoProps) => {
    const { product } = props
    const isError = ratingStore.status === StatusEnum.error
    const isSuccess = ratingStore.status === StatusEnum.success
    const [rating, setRating] = useState<number | null>(0)

    const rateProduct = (productId: IProduct['id']) => {
        if (userStore.user) {
            ratingStore.rateProduct({
                user: userStore.user.id,
                productId: productId,
                rate: rating as number,
            })
        }
    }

    if (isError) {
        return <p>{Strings.errorMessage}</p>
    }

    if (isSuccess) {
        return <p>{Strings.successMessage}</p>
    }

    return (
        <RatingModalInfoComponent>
            <p className='ratingTitle'>{Strings.productRating}</p>
            <Rating
                size='large'
                name='simple-controlled'
                value={rating}
                onChange={(event, newRating) => {
                    setRating(newRating)
                }}
            />
            <AuthButton text={Strings.rate} className='loginBtn' onClick={() => rateProduct(product.id)}/>
        </RatingModalInfoComponent>
    )
})
