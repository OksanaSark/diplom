import React from 'react'

import { Field, Form, FormikProps, FormikProvider, useFormik } from 'formik'

import NavBarInputComponent from './styles'

interface FormValue {
    query: string,
}

export const NavBarInput = () => {
    const formik: FormikProps<FormValue> = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: (value: FormValue): void => {
            console.log('Value', value)
        },
    })

    return (
        <NavBarInputComponent>
            <FormikProvider value={formik}>
                <Form className="searchContainer">
                    <Field
                        name="query"
                        value={formik.values.query}
                        className={'field'}
                        maxlength="25"
                        type="search"
                        placeholder="Введите категорию/продукт"
                        onChange={formik.handleChange}
                    />
                    <button
                        type="submit"
                        className={'searchIcon'}
                        disabled={!formik.values.query}
                    />
                </Form>
            </FormikProvider>
        </NavBarInputComponent>
    )
}
