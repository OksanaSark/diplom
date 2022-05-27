import React, { ChangeEvent } from 'react'
import { Button } from '@mui/material'
import { ErrorMessage, Field, Form, FormikProps, FormikProvider } from 'formik'
import { observer } from 'mobx-react-lite'

import { IProductInfo, ProductFormValues } from './ProductFormContainer'
import { Icons } from '../../../../assets/media/icons/Icons'
import { ICategory } from '../../../../services/types/types'
import { categoryStore } from '../../../../store/CategoryStore'
import { AuthButton } from '../../../AuthModal/AuthButton'
import { Strings } from '../strings'

import ProductForm from './styles'

interface ProductFormComponentProps {
    formik: FormikProps<ProductFormValues>,
    productInfo: IProductInfo[],
    addInfo: (
        setFieldValue: (field: string, value: IProductInfo[]) => void,
        values: ProductFormValues
    ) => void,
    removeInfo: (
        infoId: number,
        setFieldValue: (field: string, value: IProductInfo[]) => void,
        values: ProductFormValues
    ) => void,
    selectImg: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const ProductFormComponent = observer((props: ProductFormComponentProps) => {
    const {
        formik,
        productInfo,
        addInfo,
        removeInfo,
        selectImg,
    } = props

    return (
        <ProductForm>
            <p className='title'>{Strings.ProductForm.creating}</p>
            <FormikProvider value={formik}>
                <Form className={formik.touched.categoryId && formik.errors.categoryId ? 'formContainer' : 'formContainer fieldMargin'}>
                    <Field as="select" className='categorySelector' name='categoryId'>
                        <option value="" label='Категории' />
                        {categoryStore.categories.map((category: ICategory) =>
                            <option
                                key={category.id}
                                value={category.id}
                                label={category.name}
                            >
                                {category.name}
                            </option>,
                        )}
                    </Field>
                    <ErrorMessage className='errorMessage' name='categoryId' component='p' />
                    <Field
                        className={formik.touched.productName && formik.errors.productName ? 'field' : 'field fieldMargin'}
                        maxLength='15'
                        type='text'
                        name='productName'
                        placeholder={Strings.ProductForm.placeholder}
                    />
                    <ErrorMessage className='errorMessage' name='productName' component='p'/>
                    <Field
                        className={formik.touched.productPrice && formik.errors.productPrice ? 'field price' : 'field fieldMargin price'}
                        maxLength='10'
                        type='number'
                        name='productPrice'
                        placeholder={Strings.ProductForm.pricePlaceholder}
                    />
                    <ErrorMessage className='errorMessage' name='productPrice' component='p'/>
                    <Button
                        className='formBtn'
                        variant='contained'
                        component='label'
                        color='inherit'
                    >
                        {Strings.ProductForm.selectImg}
                        <input
                            hidden
                            className='formBtn'
                            type='file'
                            name='productImg'
                            accept='image/*'
                            onChange={selectImg}
                        />
                    </Button>
                    {formik.values.productImg && <div className='imgPreview'>
                        <img src={Icons.Img}/>
                        <p className='imgName'>{formik.values.productImg.name}</p>
                    </div>}
                    <Button
                        className='formBtn'
                        variant='contained'
                        component='label'
                        color='inherit'
                        onClick={() => addInfo(formik.setFieldValue, formik.values)}
                    >
                        {Strings.ProductForm.addProperty}
                    </Button>
                    {productInfo.map((info, index) =>
                        <div key={info.id} className='infoContainer'>
                            <Field
                                className='infoTitle'
                                name={`productInfo[${index}].title`}
                                type='text'
                                placeholder='свойство'
                            />
                            <Field
                                className='infoDescription'
                                name={`productInfo[${index}].description`}
                                type='text'
                                placeholder='описание'
                            />
                            <img
                                src={Icons.DeleteInfo}
                                onClick={() => removeInfo(info.id, formik.setFieldValue, formik.values)}
                            />
                        </div>,
                    )}
                    <AuthButton
                        text='Создать'
                        className='loginBtn'
                        disabled={formik.isSubmitting}
                    />
                </Form>
            </FormikProvider>
        </ProductForm>
    )
})
