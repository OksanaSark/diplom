import React, { useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ErrorMessage, Field, Form, FormikProps, FormikProvider, useFormik } from 'formik'

import { productValidationSchema } from '../../../../helpers/formValidation'
import { StatusEnum } from '../../../../services/types/types'
import { categoryStore } from '../../../../store/CategoryStore'
import { productStore } from '../../../../store/ProductStore'
import { AuthButton } from '../../../AuthModal/AuthButton'

import ProductFormComponent from './styles'

export interface ProductFormValues {
    productName: string
    productPrice: string
    // info: string
    // img: string,
    // categoryId: number
}

interface IProductInfo {
    title: string,
    description: string
}

const ProductForm = () => {
    const [productImg, setProductImg] = useState()
    const [productInfo, setProductInfo] = useState<IProductInfo[]>([])
    const isError: boolean = StatusEnum.error === productStore.status
    const isSuccess: boolean = StatusEnum.success === productStore.status

    const formik: FormikProps<ProductFormValues> = useFormik({
        initialValues: {
            productName: '',
            productPrice: '',
        },
        onSubmit: (values: ProductFormValues): void => {
            console.log('IIIII', values)
            // categoryStore.createCategory(values)
        },
        validationSchema: productValidationSchema,
    })

    const addInfo = () => {
        setProductInfo([...productInfo, { title: '', description: '' }])
    }
    const removeInfo = () => {
        setProductInfo(productInfo.filter)
    }

    if (isError) {
        return <p>Что-то пошло не так, повторите позже</p>
    }

    if (isSuccess) {
        return <p>Продукт создан!</p>
    }

    const selectProductImg = (e: Event ) => {
        const target = e.target as HTMLInputElement
        const files = target.files
        // setProductImg(files[0])
    }
    console.log('MIMI', categoryStore.categories.map((item) => item.name))

    return (
        <ProductFormComponent>
            <p className='title'>Создание продукта</p>
            <FormikProvider value={formik}>
                <Form className='formContainer'>
                    <FormControl fullWidth className='categorySelector'>
                        <InputLabel id='categorySelector'>Категории</InputLabel>
                        <Select
                            labelId='categorySelector'
                            id='categorySelector'
                            // value={age}
                            label='Категории'
                            // onChange={handleChange}
                        >
                            {categoryStore.categories.map((item) =>
                                <MenuItem key={item.id} value={10}>{item.name}</MenuItem>,
                            )}
                        </Select>
                    </FormControl>
                    <Field
                        className={formik.touched.productName && formik.errors.productName ? 'field' : 'field fieldMargin'}
                        maxLength='15'
                        type='text'
                        name='productName'
                        placeholder='Введите наименование продукта'
                    />
                    <ErrorMessage className='errorMessage' name='productName' component='p'/>
                    <Field
                        className={formik.touched.productPrice && formik.errors.productPrice ? 'field price' : 'field fieldMargin price'}
                        maxLength='10'
                        type='text'
                        name='productPrice'
                        placeholder='Введите стоимость продукта'
                    />
                    <ErrorMessage className='errorMessage' name='productPrice' component='p'/>
                    <Button className='imgBtn'
                        variant="contained"
                        component="label"
                    >
                        Выберите изображение
                        <input
                            hidden
                            type="file"
                        />
                    </Button>
                    <AuthButton
                        text='Создать'
                        className='loginBtn'
                        disabled={formik.isSubmitting}
                    />
                </Form>
            </FormikProvider>
        </ProductFormComponent>
    )
}

export default ProductForm
