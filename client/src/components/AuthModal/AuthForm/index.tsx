import React from 'react'
import { ErrorMessage, Field, Form, FormikErrors, FormikProps, FormikProvider, useFormik } from 'formik'

import { AuthButton } from '../AuthButton'

import AuthFormComponent from './styles'

interface FormValues {
    email: string,
    password: string,
}

interface AuthFormProps {
    isLogin: boolean
}

export const AuthForm = (props: AuthFormProps) => {
    const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    const formik: FormikProps<FormValues> = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values: FormValues, { setSubmitting }): void => {
            setSubmitting(false)
        },
        validate: (values: FormValues) => {
            const errors: FormikErrors<FormValues> = {}

            if (!values.email) {
                errors.email = 'Введите email'
            } else if (
                !emailFormat.test(values.email)
            ) {
                errors.email = 'Неверный формат данных'
            }

            if (!values.password) {
                errors.password = 'Введите пароль'
            }

            return errors
        },
    })

    return (
        <AuthFormComponent>
            <FormikProvider value={formik}>
                <Form>
                    <Field
                        className={formik.touched.email && formik.errors.email ? 'field' : 'field fieldMargin'}
                        maxlength="25"
                        type="email" name="email"
                        placeholder="test@gmail.com"
                    />
                    <ErrorMessage
                        className={'errorMessage'}
                        name="email"
                        component="p"
                    />
                    <Field
                        className={formik.touched.password && formik.errors.password ? 'field' : 'field fieldMargin'}
                        maxlength="15"
                        type="password"
                        name="password"
                        placeholder="пароль"
                    />
                    <ErrorMessage
                        className={'errorMessage'}
                        name="password"
                        component="p"
                    />
                    <AuthButton
                        text={props.isLogin ? 'Войти' : 'Зарегистрироваться'}
                        className={props.isLogin ? 'loginBtn' : 'registrationBtn'}
                        disabled={formik.isSubmitting}
                    />
                </Form>
            </FormikProvider>
        </AuthFormComponent>
    )
}
