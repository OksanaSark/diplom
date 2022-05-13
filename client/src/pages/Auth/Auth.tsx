import React from 'react'

import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'

import { Logo } from '../../components/Logo'

import AuthComponent from './style'

export const Auth = () => {
    // todo add interfaces, remove any, may be create a hoc to use in registration too

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values: any, { setSubmitting }) => {
            console.log('I WAS PRESSED')
        },
        validate: (values: any) => {
            const errors: any = {}
            if (!values.email) {
                errors.email = 'Введите email!'
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Неверный формат данных'
            }
            if (!values.password) {
                errors.password = 'Введите пароль!'
            }
            return errors
        },
    })

    return (
        <AuthComponent>
            <div className={'container'}>
                <div className={'loginContainer'}>
                    <Logo />
                    <Formik
                        initialValues={formik.initialValues}
                        validate={formik.validateForm}
                        onSubmit={formik.handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className={'formContainer'}>
                                <Field className={'field'} type="email" name="email" placeholder="test@gmail.com" />
                                <ErrorMessage className={'errorMessage'} name="email" component="div" />
                                <Field className={'field'} type="password" name="password" placeholder="пароль" />
                                <ErrorMessage className={'errorMessage'} name="password" component="div" />
                                <button className={'loginBtn'} type="submit" disabled={isSubmitting}>
                                    Войти
                                </button>
                                <button className={'registrationBtn'} type="submit">
                                    Зарегистрироваться
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </AuthComponent>
    )
}
