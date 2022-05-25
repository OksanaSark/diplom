import * as Yup from 'yup'

export const loginValidation = {
    email: Yup.string()
        .email('Некорректный email')
        .required('Введите email'),
    password: Yup.string()
        .min(4, 'Пароль слишком короткий')
        .required('Введите пароль'),
}

export const registrationValidation = {
    firstName: Yup.string()
        .required('Введите имя'),
    lastName: Yup.string()
        .required('Введите фамилию'),
    phoneNumber: Yup.string()
        .required('Введите номер телефона'),
}

export const categoryValidation = {
    categoryName: Yup.string()
        .required('Введите наименование категории')
        .min(3, 'Наименование категории слишиком короткое'),
}

export const productValidation = {
    price: Yup.number()
        .required('Введите наименование продукта')
        .min(2, 'Наименование продукта слишком короткое'),
    productName: Yup.string()
        .required('Введите наименование категории')
        .min(3, 'Наименование категории слишком короткое'),
}

export const loginValidationSchema = Yup.object().shape(loginValidation)
export const registrationValidationSchema = Yup.object().shape({ ...loginValidation, ...registrationValidation })
export const categoryValidationSchema = Yup.object().shape(categoryValidation)
export const productValidationSchema = Yup.object().shape(productValidation)

