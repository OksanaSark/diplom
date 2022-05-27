import React from 'react'
import { ErrorMessage, Field, Form, FormikProps, FormikProvider, useFormik } from 'formik'
import { observer } from 'mobx-react-lite'

import { categoryValidationSchema } from '../../../../helpers/formValidation'
import { StatusEnum } from '../../../../services/types/types'
import { categoryStore } from '../../../../store/CategoryStore'
import { AuthButton } from '../../../AuthModal/AuthButton'
import { Strings } from '../strings'

import CategoryFormComponent from './styles'

export interface CategoryFormValues {
    categoryName: string,
}

const CategoryForm = observer(() => {
    const isError: boolean = StatusEnum.error === categoryStore.status
    const isSuccess: boolean = StatusEnum.success === categoryStore.status

    const formik: FormikProps<CategoryFormValues> = useFormik({
        initialValues: {
            categoryName: '',
        },
        onSubmit: (values: CategoryFormValues): void => {
            categoryStore.createCategory(values)
        },
        validationSchema: categoryValidationSchema,
    })

    if (isError) {
        return <p>{Strings.errorMessage}</p>
    }

    if (isSuccess) {
        return <p>{Strings.CategoryForm.successfulCreation}</p>
    }

    return (
        <CategoryFormComponent>
            <p className='title'>{Strings.CategoryForm.creating}</p>
            <FormikProvider value={formik}>
                <Form>
                    <Field
                        className={formik.touched.categoryName && formik.errors.categoryName ? 'field' : 'field fieldMargin'}
                        maxLength='15'
                        type='text'
                        name='categoryName'
                        placeholder={Strings.CategoryForm.placeholder}
                    />
                    <ErrorMessage className='errorMessage' name='categoryName' component='p'/>
                    <AuthButton
                        text='Создать'
                        className='loginBtn'
                        disabled={formik.isSubmitting}
                    />
                </Form>
            </FormikProvider>
        </CategoryFormComponent>
    )
})

export default CategoryForm
