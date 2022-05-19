import React from 'react'
import { ErrorMessage, Field, Form, FormikProps, FormikProvider, useFormik } from 'formik'

import { loginValidationSchema, registrationValidationSchema } from '../../../helpers/formValidation'
import { AuthButton } from '../AuthButton'

import AuthFormComponent from './styles'

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
}

interface AuthFormProps {
    isLogin: boolean
}

export const AuthForm = (props: AuthFormProps) => {
    const formik: FormikProps<FormValues> = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
        },
        onSubmit: (values: FormValues, { setSubmitting }): void => {
            setSubmitting(false)
        },
        validationSchema: props.isLogin ? loginValidationSchema : registrationValidationSchema,
    })

    return (
        <AuthFormComponent>
            <FormikProvider value={formik}>
                <Form>
                    {!props.isLogin
                        && <>
                            <Field
                                className={formik.touched.firstName && formik.errors.firstName ? 'field' : 'field fieldMargin'}
                                maxlength='20'
                                type='text'
                                name='firstName'
                                placeholder='first name'
                            />
                            <ErrorMessage className='errorMessage' name='firstName' component='p' />
                            <Field
                                className={formik.touched.lastName && formik.errors.lastName ? 'field' : 'field fieldMargin'}
                                maxlength='20'
                                type='text'
                                name='lastName'
                                placeholder='last name'
                            />
                            <ErrorMessage className='errorMessage' name='lastName' component='p' />
                            <Field
                                className={formik.touched.phoneNumber && formik.errors.phoneNumber ? 'field' : 'field fieldMargin'}
                                maxlength='11'
                                type='phone'
                                name='phoneNumber'
                                placeholder='phone number'
                            />
                            <ErrorMessage className='errorMessage' name='phoneNumber' component='p' />
                        </>
                    }
                    <Field
                        className={formik.touched.email && formik.errors.email ? 'field' : 'field fieldMargin'}
                        maxlength='25'
                        type='email'
                        name='email'
                        placeholder='test@gmail.com'
                    />
                    <ErrorMessage className='errorMessage' name='email' component='p' />
                    <Field
                        className={formik.touched.password && formik.errors.password ? 'field' : 'field fieldMargin'}
                        maxlength='15'
                        type='password'
                        name='password'
                        placeholder='пароль'
                    />
                    <ErrorMessage className='errorMessage' name='password' component='p' />
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
