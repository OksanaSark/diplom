import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Rating } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { AuthButton } from '../../components/AuthModal/AuthButton'
import { AdminModal } from '../../components/Profile/AdminModal'
import { RatingModalInfo } from '../../components/RatingModalInfo'
import { useCheckProductInBasket } from '../../hooks/useCheckProductInBasket'
import { Strings } from './strings'
import { addToBasket } from '../../helpers/addToBasket'
import { IProduct, StatusEnum } from '../../services/types'
import { basketStore } from '../../store/BasketStore'
import { productStore } from '../../store/ProductStore'
import { ratingStore } from '../../store/RatingStore'
import { userStore } from '../../store/UserStore'

import { ProductDetailsComponent } from './styles'

interface IStateType {
    productId: IProduct['id']
}

export const ProductDetails = observer(() => {
    const [isRatingModalOpen, setIsRatingModalOpen] = useState<boolean>(false)
    const location = useLocation()
    const { productId } = location.state as IStateType
    const isInBasket = useCheckProductInBasket(basketStore.products, productId)
    const product = productStore.product

    const openRatingModal = () => {
        setIsRatingModalOpen(true)
    }

    const closeRatingModal = () => {
        setIsRatingModalOpen(false)
        ratingStore.setStatus(StatusEnum.initial)
    }

    const getProduct = () => {
        if (productId) {
            productStore.getOneProduct(productId).then(() => productStore.setStatus(StatusEnum.initial))
        }
    }

    useEffect(() => {
        getProduct()
    }, [productId])

    const renderProductDetails = (product: IProduct) => {
        return <div className='detailsContainer'>
            <p className='detailsTitle'>{Strings.details}</p>
            <div className='details'>
                {
                    product.info.filter((product, index) => index !== 0).map((info, index) =>
                        <div key={index} className='detailContainer'>
                            <p className='detailTitle'>{info.title}</p>
                            <p className='detailDescription'>{info.description}</p>
                        </div>)
                }
            </div>
        </div>
    }

    return (
        product && <ProductDetailsComponent>
            <div className='productContainer'>
                <div className='imgContainer'>
                    <img className='productImg' src={`${process.env.REACT_APP_BASE_URL}${product.img}`}/>
                </div>
                <div className='productInfo'>
                    <div className='infoContainer'>
                        <p className='productName'>{product.name}</p>
                        <p className='productPrice'>{product.price} &#8381;</p>
                        <p className='productTitle'>{product.info[0].title}</p>
                        <p className='productDescription'>{product.info[0].description}</p>
                        <Rating readOnly name='read-only' size='large' value={product.rateInfo.rate}/>
                    </div>
                    <div className='btnsContainer'>
                        <AuthButton
                            text={Strings.rate}
                            className='loginBtn'
                            disabled={product.rateInfo.isRated}
                            onClick={openRatingModal}
                        />
                        <AuthButton
                            text={Strings.addToBasket}
                            className='loginBtn'
                            disabled={isInBasket || !userStore.isAuth}
                            onClick={() => addToBasket(product.id)}
                        />
                    </div>
                </div>
            </div>
            {renderProductDetails(product)}
            <AdminModal
                children={<RatingModalInfo product={product} />}
                isModalOpen={isRatingModalOpen}
                closeModal={closeRatingModal}
            />
        </ProductDetailsComponent>
    )
})
