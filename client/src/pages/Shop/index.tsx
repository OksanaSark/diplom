import React from 'react'
import { Pagination, PaginationItem } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { CustomSwiper } from '../../components/CustomSwiper'
import { Products } from '../../components/Products'
import { productStore } from '../../store/ProductStore'

import { ShopComponent } from './styles'

export const Shop = observer(() => {
    const pageCount: number = Math.ceil(productStore.count / productStore.limit)

    const onChangePage = (e: React.ChangeEvent<unknown>, p: number) => {
        productStore.setPage(p)
    }

    return (
        <ShopComponent>
            <CustomSwiper />
            <Products />
            <Pagination
                page={productStore.page}
                className='paginationContainer'
                size='large'
                count={pageCount}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                    />
                )}
                onChange={onChangePage}
            />
        </ShopComponent>
    )
})
