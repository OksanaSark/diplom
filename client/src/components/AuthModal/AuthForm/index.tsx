import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, FormikProps, FormikProvider, useFormik } from 'formik'
import { observer } from 'mobx-react-lite'

import { loginValidationSchema, registrationValidationSchema } from '../../../helpers/formValidation'
import { Routes } from '../../../routes'
import { StatusEnum } from '../../../services/types/types'
import { userStore } from '../../../store/UserStore'
import { AuthButton } from '../AuthButton'

import AuthFormComponent from './styles'

export interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
}

interface AuthFormProps {
    isLogin: boolean,
    setIsAuthModalOpen: (isAuthModalOpen: boolean) => void,
}

export const AuthForm = observer((props: AuthFormProps) => {
    const { isLogin, setIsAuthModalOpen } = props
    const isError: boolean = StatusEnum.error === userStore.status
    const navigate = useNavigate()

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
            if (isLogin) {
                userStore.login(values)
            } else {
                userStore.registration(values)
            }
            navigate(Routes.ShopRoute)
        },
        validationSchema: isLogin ? loginValidationSchema : registrationValidationSchema,
    })

    if (isError) {
        return <p>Что-то пошло не так, повторите позже</p>
    }

    useEffect(() => {
        if (userStore.isAuth) {
            setIsAuthModalOpen(false)
        }
    }, [userStore.isAuth])

    return (
        <AuthFormComponent>
            <FormikProvider value={formik}>
                <Form>
                    {!isLogin
                        && (
                            <>
                                <Field
                                    className={formik.touched.firstName && formik.errors.firstName ? 'field' : 'field fieldMargin'}
                                    maxLength='20'
                                    type='text'
                                    name='firstName'
                                    placeholder='first name'
                                />
                                <ErrorMessage className='errorMessage' name='firstName' component='p'/>
                                <Field
                                    className={formik.touched.lastName && formik.errors.lastName ? 'field' : 'field fieldMargin'}
                                    maxLength='20'
                                    type='text'
                                    name='lastName'
                                    placeholder='last name'
                                />
                                <ErrorMessage className='errorMessage' name='lastName' component='p'/>
                                <Field
                                    className={formik.touched.phoneNumber && formik.errors.phoneNumber ? 'field' : 'field fieldMargin'}
                                    maxLength='11'
                                    type='phone'
                                    name='phoneNumber'
                                    placeholder='phone number'
                                />
                                <ErrorMessage className='errorMessage' name='phoneNumber' component='p'/>
                            </>
                        )
                    }
                    <Field
                        className={formik.touched.email && formik.errors.email ? 'field' : 'field fieldMargin'}
                        maxLength='25'
                        type='email'
                        name='email'
                        placeholder='test@gmail.com'
                    />
                    <ErrorMessage className='errorMessage' name='email' component='p'/>
                    <Field
                        className={formik.touched.password && formik.errors.password ? 'field' : 'field fieldMargin'}
                        maxLength='15'
                        type='password'
                        name='password'
                        placeholder='пароль'
                    />
                    <ErrorMessage className='errorMessage' name='password' component='p'/>
                    <AuthButton
                        text={isLogin ? 'Войти' : 'Зарегистрироваться'}
                        className={isLogin ? 'loginBtn' : 'registrationBtn'}
                        disabled={formik.isSubmitting}
                    />
                </Form>
            </FormikProvider>
        </AuthFormComponent>
    )
})
