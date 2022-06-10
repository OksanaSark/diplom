import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { useCheckProductInBasket } from '../../../hooks/useCheckProductInBasket'
import { Strings } from './strings'
import { addToBasket } from '../../../helpers/addToBasket'
import { getImageSrc } from '../../../helpers/getImageSrc'
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
    const isInBasket = useCheckProductInBasket(basketStore.products, product.id)

    return (
        <ProductCardComponent>
            <img className='productImg' src={getImageSrc(product.imageData.data, product.imageType)} />
            <div className='productInfoContainer'>
                <div className='titlesContainer'>
                    <p className='name'>{product.name}</p>
                    <p className='price'>{product.price} &#8381;</p>
                </div>
                <div className='btnsContainer' >
                    <Link className='detailsBtn' to={`${Routes.ProductRoute}/${product.id}`} state={{ productId: product.id }}>
                        <p className='detailsBtnText'>{Strings.details}</p>
                    </Link>
                    <button
                        className={isInBasket || !userStore.isAuth ? 'basketBtn disabled' : 'basketBtn'}
                        disabled={isInBasket || !userStore.isAuth}
                        onClick={() => addToBasket(product.id)}
                    >
                        <p className='basketBtnText'>{Strings.inBasket}</p>
                    </button>
                </div>
            </div>
        </ProductCardComponent>
    )
})

export default ProductCard
