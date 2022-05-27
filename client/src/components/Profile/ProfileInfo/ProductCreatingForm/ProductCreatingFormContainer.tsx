import React, { ChangeEvent, useState } from 'react'
import { FormikProps, useFormik } from 'formik'
import { observer } from 'mobx-react-lite'

import { ProductCreatingFormComponent } from './ProductCreatingFormComponent'
import { productValidationSchema } from '../../../../helpers/formValidation'
import { StatusEnum } from '../../../../services/types/types'
import { productStore } from '../../../../store/ProductStore'
import { Strings } from '../strings'

export interface ProductFormValues {
    productName: string,
    productPrice: string,
    productInfo: IProductInfo[],
    categoryId: string,
    productImg: File | null,
}

export interface IProductInfo {
    id: number,
    title: string,
    description: string
}

const initialProductInfo = {
    id: Date.now(),
    title: '',
    description: '',
}

export const ProductCreatingFormContainer = observer(() => {
    const [productInfo, setProductInfo] = useState<IProductInfo[]>([initialProductInfo])
    const isError: boolean = StatusEnum.error === productStore.status
    const isSuccess: boolean = StatusEnum.success === productStore.status

    const formik: FormikProps<ProductFormValues> = useFormik({
        initialValues: {
            productName: '',
            productPrice: '',
            categoryId: '',
            productInfo: [initialProductInfo],
            productImg: null,
        },
        onSubmit: (values: ProductFormValues, { setSubmitting }): void => {
            setSubmitting(false)
            const formData = new FormData()
            formData.append('name', values.productName)
            formData.append('price', values.productPrice)
            formData.append('info', JSON.stringify(values.productInfo))
            formData.append('categoryId', values.categoryId)
            formData.append('img', values.productImg as File)
            productStore.createProduct(formData)
        },
        validationSchema: productValidationSchema,
    })

    const addInfo = (
        setFieldValue: (field: string, value: IProductInfo[]) => void,
        values: ProductFormValues,
    ): void => {
        const id = Date.now()
        setFieldValue('productInfo', [...values.productInfo, { id, title: '', description: '' }])
        setProductInfo([...productInfo, { id, title: '', description: '' }])
    }

    const removeInfo = (
        infoId: number,
        setFieldValue: (field: string, value: IProductInfo[]) => void,
        values: ProductFormValues,
    ): void => {
        setProductInfo(productInfo.filter((info) => info.id !== infoId))
        setFieldValue('productInfo', values.productInfo.filter((info: IProductInfo) => info.id !== infoId) )
    }

    const selectImg = (event: ChangeEvent<HTMLInputElement>) => {
        const target: HTMLInputElement & EventTarget = event.target as HTMLInputElement
        const fileList: FileList | null = target.files
        if (fileList) {
            formik.setFieldValue('productImg', fileList[0])
        }
    }

    if (isError) {
        return <p>{Strings.errorMessage}</p>
    }

    if (isSuccess) {
        return <p>{Strings.ProductForm.successfulCreation}</p>
    }

    return (
        <ProductCreatingFormComponent
            formik={formik}
            productInfo={productInfo}
            addInfo={addInfo}
            removeInfo={removeInfo}
            selectImg={selectImg}
        />
    )
})
