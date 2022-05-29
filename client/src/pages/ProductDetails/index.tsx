import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Rating } from '@mui/material'

import { AuthButton } from '../../components/AuthModal/AuthButton'
import { ProductApiClass } from '../../services/api/ProductApi'
import { IProduct } from '../../services/types'
import { userStore } from '../../store/UserStore'

import ProductDetailsComponent from './styles'

interface stateType {
    productId: IProduct['id']
}

export const ProductDetails = () => {
    const location = useLocation()
    const { productId } = location.state as stateType
    const [product, setProduct] = useState<IProduct | null>(null)

    // todo check this
    const getProduct = async () => {
        try {
            if (productId) {
                const product = await ProductApiClass.getOneProduct(productId, userStore.user!.id)
                if (product) {
                    setProduct(product)
                }
            }
        } catch (err) {
            console.log('product getting error')
            return <p>Что-то пошло не так, повторите позже</p>
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const renderProductDetails = () => {
        return <div className='detailsContainer'>
            <p className='detailsTitle'>Подробности</p>
            <div className='details'>
                {
                    product?.info.filter((item, index) => index !== 0).map((info, index) =>
                        <div key={index} className='detailContainer'>
                            <p className='detailTitle'>{info.title}</p>
                            <p className='detailDescription'>{info.description}</p>
                        </div>,
                    )
                }
            </div>
        </div>
    }

    const getImgUrl = () => {
        if (product) {
            return `${process.env.REACT_APP_LOCALHOST_URL}${product?.img}`
        }
    }

    const getProductRate = () => {
        if (product?.rateInfo) {
            return product.rateInfo.rate
        }
        return 0
    }

    if (product?.info) {
        console.log()
    }

    return (
        <ProductDetailsComponent>
            <div className='productContainer'>
                <div className='imgContainer'>
                    <img className='productImg' src={getImgUrl()} />
                </div>
                <div className='productInfo'>
                    <div className='infoContainer'>
                        <p className='productName'>{product?.name}</p>
                        <p className='productPrice'>{product?.price} &#8381;</p>
                        <p className='productTitle'>{product?.info[0].title}</p>
                        <p className='productDescription'>{product?.info[0].description}</p>
                        <Rating readOnly name="read-only" size='large' value={getProductRate()} />
                    </div>
                    <div className='btnsContainer'>
                        <AuthButton text='Оценить' />
                        <AuthButton text='Добавить в корзину' className='loginBtn' />
                    </div>
                </div>
            </div>
            {renderProductDetails()}
        </ProductDetailsComponent>
    )
}
