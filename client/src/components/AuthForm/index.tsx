import React from 'react'

import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikProps, useFormik } from 'formik'

import { AuthButton } from '../AuthButton'

import AuthFormComponent from './styles'

interface FormValues {
    email: string,
    password: string,
}

interface AuthFormProps {
    isRegistration: boolean
}

export const AuthForm = (props: AuthFormProps) => {
    const formik: FormikProps<FormValues> = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        // todo use after defining the correct type for handleSubmit
        onSubmit: (values: FormValues): void => {
            console.log('values', values)
        },
        validate: (values: FormValues) => {
            const errors: FormikErrors<FormValues> = {}

            if (!values.email) {
                errors.email = 'Введите email'
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
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
            <Formik
                initialValues={formik.initialValues}
                validate={formik.validateForm}
                onSubmit={(values: FormValues) => console.log('I WAS PRESSED')}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <Field
                            className={touched.email && errors.email ? 'field' : 'field fieldMargin'}
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
                            className={touched.password && errors.password ? 'field' : 'field fieldMargin'}
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
                            text={props.isRegistration ? 'Зарегистрироваться' : 'Войти'}
                            className={props.isRegistration ? 'registrationBtn' : 'loginBtn'}
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
        </AuthFormComponent>
    )
}
