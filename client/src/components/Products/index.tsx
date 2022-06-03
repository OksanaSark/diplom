import React, { useEffect, useState } from 'react'
import { FormControl, MenuItem, Select } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { ProductList } from './ProductList'
import { Strings } from './strings'
import { ICategory, StatusEnum } from '../../services/types'
import { categoryStore } from '../../store/CategoryStore'
import { productStore } from '../../store/ProductStore'

import { ProductsComponent } from './styles'

export const filters = {
    update: Strings.update,
    rating: Strings.rating,
    cheapPrice: Strings.cheapPrice,
    expensivePrice: Strings.expensivePrice,
}

export const Products = observer(() => {
    const [activeCategoryId, setActiveCategoryId] = useState(-1)
    const [activeFilter, setActiveFilter] = useState(filters.update)

    useEffect(() => {
        categoryStore.fetchCategories().then(() => categoryStore.setStatus(StatusEnum.initial))
        productStore.fetchProducts().then(() => productStore.setStatus(StatusEnum.initial))
    }, [])

    const selectCategory = (categoryId: ICategory['id']) => {
        if (categoryId === activeCategoryId) {
            setActiveCategoryId(-1)
        } else {
            setActiveCategoryId(categoryId)
        }

        productStore.fetchProducts(categoryId)
    }

    const selectFilter = (filter: string) => {
        setActiveFilter(filter)
        productStore.filterProducts(filter, activeCategoryId)
    }

    return (
        <ProductsComponent>
            <div className='categoriesContainer'>
                <p className='categoryTitle'>{Strings.category}</p>
                {categoryStore.categories.map((category) =>
                    <div key={category.id} className='categoryContainer'>
                        <p
                            className={activeCategoryId === category.id ? 'category activeCategory' : 'category'}
                            onClick={() => selectCategory(category.id)}
                        >
                            {category.name}
                        </p>
                    </div>,
                )}
            </div>
            <div className='productsContainer'>
                <div className='filtersContainer'>
                    <p className='filterTitle'>{Strings.sorting}</p>
                    <FormControl size={'small'}>
                        <Select autoWidth value={activeFilter}>
                            {Object.values(filters).map((filter: string, index: number) =>
                                <MenuItem key={index}
                                    value={filter}
                                    onClick={() => selectFilter(filter)}
                                >
                                    {filter}
                                </MenuItem>,
                            )}
                        </Select>
                    </FormControl>
                </div>
                <ProductList />
            </div>
        </ProductsComponent>
    )
})
