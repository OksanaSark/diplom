import React from 'react'
import { Link } from 'react-router-dom'

import { Routes } from '../../../routes'
import { IProduct } from '../../../services/types/types'

import { ProductCardComponent } from './styles'

interface ProductCardProps {
    product: IProduct
}

export const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    return (
        <ProductCardComponent>
            <img className='productImg' src={process.env.REACT_APP_LOCALHOST_URL + product.img} />
            <div className='productInfoContainer'>
                <div className='titlesContainer'>
                    <p className='name'>{product.name}</p>
                    <p className='price'>{product.price} &#8381;</p>
                </div>
                <div className='btnsContainer' >
                    <Link className='detailsBtn' to={`${Routes.ProductRoute}/${product.id}`} state={{ productId: product.id }}>
                        <p className='detailsBtnText'>Подробнее</p>
                    </Link>
                    <button className='basketBtn'>
                        <p className='basketBtnText'>В корзину</p>
                    </button>
                </div>
            </div>

        </ProductCardComponent>
    )
}

export default ProductCard
