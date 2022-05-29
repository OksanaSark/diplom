import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import { ProductList } from './ProductList'
import { Icons } from '../../assets/media/icons/Icons'
import { ICategory, StatusEnum } from '../../services/types'
import { categoryStore } from '../../store/CategoryStore'
import { productStore } from '../../store/ProductStore'

import { ProductsComponent } from './styles'

export const Products = observer(() => {
    const [activeCategoryId, setActiveCategoryId] = useState(-1)
    const [activeFilterIndex, setActiveFilterIndex] = useState(-1)
    const filters = ['Рейтингу', 'Цене', 'Обновлению']

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
        productStore.fetchProducts(categoryId).then(() => productStore.setStatus(StatusEnum.initial))
    }

    const selectFilter = (index: number) => {
        if (activeFilterIndex === index) {
            setActiveFilterIndex(-1)
        } else {
            setActiveFilterIndex(index)
        }
    }

    return (
        <ProductsComponent>
            <div className='categoriesContainer'>
                <p className='categoryTitle'>Категория</p>
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
                    <p className='filterTitle'>Сортировать по:</p>
                    {filters.map((filter, index) =>
                        <div key={index} className={activeFilterIndex === index ? 'filter activeFilter' : 'filter'}>
                            <p className='filterName' onClick={() => selectFilter(index)}>
                                {filter}
                            </p>
                            <img className='downArrow' src={Icons.DownArrow} />
                        </div>,
                    )}
                </div>
                <ProductList />
            </div>
        </ProductsComponent>
    )
})
