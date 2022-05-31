import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Routes } from '../../../routes'
import { IProduct } from '../../../services/types'
import { basketStore } from '../../../store/BasketStore'
import { userStore } from '../../../store/UserStore'

import { ProductCardComponent } from './styles'

interface ProductCardProps {
    product: IProduct
}

export const ProductCard = observer((props: ProductCardProps) => {
    const { product } = props

    const isInBasket = useMemo(() => (
        basketStore.products.some((item) => item.id === product.id)
    ), [basketStore.products])

    const addToBasket = async (productId: IProduct['id']) => {
        await basketStore.addProductToBasket(productId)
    }

    return (
        <ProductCardComponent>
            <img className='productImg' src={`${process.env.REACT_APP_LOCALHOST_URL}${product!.img}`} />
            <div className='productInfoContainer'>
                <div className='titlesContainer'>
                    <p className='name'>{product.name}</p>
                    <p className='price'>{product.price} &#8381;</p>
                </div>
                <div className='btnsContainer' >
                    <Link className='detailsBtn' to={`${Routes.ProductRoute}/${product.id}`} state={{ productId: product.id }}>
                        <p className='detailsBtnText'>Подробнее</p>
                    </Link>
                    <button
                        className={isInBasket || !userStore.isAuth ? 'basketBtn disabled' : 'basketBtn'}
                        disabled={isInBasket}
                        onClick={() => addToBasket(product.id)}
                    >
                        <p className='basketBtnText'>В корзину</p>
                    </button>
                </div>
            </div>
        </ProductCardComponent>
    )
})

export default ProductCard
