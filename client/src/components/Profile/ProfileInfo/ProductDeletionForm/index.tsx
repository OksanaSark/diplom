import React, { useEffect } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { ICategory, IProduct, StatusEnum } from '../../../../services/types'
import { categoryStore } from '../../../../store/CategoryStore'
import { productStore } from '../../../../store/ProductStore'
import { Strings } from '../strings'

import { ProductDeletionFormComponent } from './styles'

export const ProductDeletionForm = observer(() => {
    const isError: boolean = StatusEnum.error === productStore.status
    const isSuccess: boolean = StatusEnum.success === productStore.status

    useEffect(() => {
        categoryStore.fetchCategories().then(() => categoryStore.setStatus(StatusEnum.initial))
    }, [])

    const deleteProduct = (productId: IProduct['id']) => {
        productStore.deleteProduct(productId)
    }

    if (isError) {
        return <p>{Strings.errorMessage}</p>
    }

    if (isSuccess) {
        return <p>{Strings.ProductForm.successfulDeletion}</p>
    }

    const selectCategory = (id: ICategory['id']) => {
        productStore.fetchProducts(id).then(() => productStore.setStatus(StatusEnum.initial))
    }

    return (
        <ProductDeletionFormComponent>
            <p className='title'>{Strings.ProductForm.deletion}</p>
            <FormControl fullWidth className='categorySelector'>
                <InputLabel id='categorySelector'>{Strings.ProductForm.label}</InputLabel>
                <Select
                    labelId='categorySelector'
                    id='categorySelector'
                    label='Категории'
                >
                    {categoryStore.categories.map((category) =>
                        <MenuItem
                            key={category.id}
                            value={category.name}
                            onClick={() => selectCategory(category.id)}
                        >
                            {category.name}
                        </MenuItem>,
                    )}
                </Select>
            </FormControl>
            {productStore.products.map((product: IProduct) => {
                return <div key={product.id} className="productContainer">
                    <p className="productName">{product.name}</p>
                    <button className='deleteBtn'
                        onClick={() => deleteProduct(product.id)}
                    />
                </div>
            })}
        </ProductDeletionFormComponent>
    )
})
