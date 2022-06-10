import React, { useEffect, useState } from 'react'
import { CircularProgress, FormControl, MenuItem, Select, Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { ProductList } from './ProductList'
import { Strings } from './strings'
import { ICategory, StatusEnum } from '../../services/types'
import { categoryStore } from '../../store/CategoryStore'
import { productStore } from '../../store/ProductStore'

import { ProductsComponent } from './styles'

export enum Filters {
    update = 'По обновлению',
    rating = 'Высокий рейтинг',
    cheapPrice = 'Сначала дешевые',
    expensivePrice = 'Сначала дорогие',
}

export const Products = observer(() => {
    const [activeCategoryId, setActiveCategoryId] = useState(0)
    const [activeFilter, setActiveFilter] = useState<Filters>(Filters.update)
    const isLoading = categoryStore.status === StatusEnum.loading

    useEffect(() => {
        categoryStore.fetchCategories().then(() => categoryStore.setStatus(StatusEnum.initial))
        productStore.fetchProducts().then(() => productStore.setStatus(StatusEnum.initial))
    }, [])

    useEffect(() => {
        productStore.fetchProducts(activeCategoryId, productStore.page)
            .then(() => productStore.setStatus(StatusEnum.initial))
    }, [productStore.page, activeCategoryId])

    const selectCategory = (categoryId: ICategory['id']) => {
        if (categoryId === 0) {
            productStore.fetchProducts()
                .then(() => productStore.setStatus(StatusEnum.initial))
        } else {
            productStore.fetchProducts(categoryId, productStore.page)
                .then(() => productStore.setStatus(StatusEnum.initial))
        }

        setActiveCategoryId(categoryId)
    }

    const selectFilter = (filter: keyof typeof Filters) => {
        setActiveFilter(Filters[filter])
        productStore.filterProducts(filter, activeCategoryId)
    }

    const renderCategories = () => {
        if (isLoading) {
            return (
                <Stack alignItems='center'>
                    <CircularProgress />
                </Stack>
            )
        }

        if (categoryStore.categories.length) {
            return categoryStore.categories.map((category) =>
                <div key={category.id} className='categoryContainer'>
                    <p
                        className={activeCategoryId === category.id ? 'category activeCategory' : 'category'}
                        onClick={() => selectCategory(category.id)}
                    >
                        {category.name}
                    </p>
                </div>,
            )
        } else {
            return <p>{Strings.noCategories}</p>
        }
    }

    return (
        <ProductsComponent>
            <div className='categoriesContainer'>
                <p className='categoryTitle'>{Strings.category}</p>
                <div className='categoryContainer'>
                    <p
                        className={activeCategoryId === 0 ? 'category activeCategory' : 'category'}
                        onClick={() => selectCategory(0)}
                    >
                        {Strings.allCategories}
                    </p>
                </div>
                {renderCategories()}
            </div>
            <div className='productsContainer'>
                <div className='filtersContainer'>
                    <p className='filterTitle'>{Strings.sorting}</p>
                    <FormControl size={'small'}>
                        <Select autoWidth value={activeFilter}>
                            {(Object.keys(Filters) as Array<keyof typeof Filters>)
                                .map((filter: keyof typeof Filters, index: number) =>
                                    <MenuItem
                                        key={index}
                                        value={Filters[filter]}
                                        onClick={() => selectFilter(filter)}
                                    >
                                        {Filters[filter]}
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
