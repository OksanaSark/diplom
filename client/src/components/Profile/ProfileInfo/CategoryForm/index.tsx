import React, { useEffect } from 'react'
import { ErrorMessage, Field, Form, FormikProps, FormikProvider, useFormik } from 'formik'
import { observer } from 'mobx-react-lite'

import { Icons } from '../../../../assets/media/icons/Icons'
import { categoryValidationSchema } from '../../../../helpers/formValidation'
import { ICategory, StatusEnum } from '../../../../services/types'
import { categoryStore } from '../../../../store/CategoryStore'
import { AuthButton } from '../../../AuthModal/AuthButton'
import { Strings } from '../strings'

import { CategoryFormComponent } from './styles'

interface CategoryFormProps {
    actionType: string,
}

export interface CategoryFormValues {
    categoryName: string,
}

export const CategoryForm = observer((props: CategoryFormProps) => {
    const { actionType } = props
    const isCreating = actionType === 'createCategory'
    const isError: boolean = StatusEnum.error === categoryStore.status
    const isSuccess: boolean = StatusEnum.success === categoryStore.status

    useEffect( () => {
        categoryStore.fetchCategories().then(() => categoryStore.setStatus(StatusEnum.initial))
    }, [])

    const deleteCategory = (categoryId: ICategory['id']) => {
        categoryStore.deleteCategory(categoryId)
    }

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
        return <p>{isCreating ? Strings.CategoryForm.successfulCreation : Strings.CategoryForm.successfulDeletion}</p>
    }

    const renderFormContent = () => {
        if (isCreating) {
            return (<FormikProvider value={formik}>
                <Form>
                    <Field
                        className={formik.touched.categoryName && formik.errors.categoryName ? 'field' : 'field fieldMargin'}
                        maxLength='30'
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
            </FormikProvider>)
        }

        return categoryStore.categories.map((category: ICategory) => {
            return <div key={category.id} className='categoryContainer'>
                <p className='categoryName'>{category.name}</p>
                <img
                    src={Icons.DeleteInfo}
                    onClick={() => deleteCategory(category.id)}
                />
            </div>
        })
    }

    return (
        <CategoryFormComponent>
            <p className='title'>{isCreating ? Strings.CategoryForm.creating : Strings.CategoryForm.deletion}</p>
            {renderFormContent()}
        </CategoryFormComponent>
    )
})
