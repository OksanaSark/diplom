import jwt_decode from 'jwt-decode'

import { FormValues } from '../../components/AuthModal/AuthForm'
import { authAxiosConfig, axiosConfig } from '../axios'
import { IUser } from '../types/types'

export class UserApiClass {
    static registration = async (values: FormValues): Promise<IUser | void> => {
        try {
            const { data } = await axiosConfig.post('/user/registration', { ...values, role: 'ADMIN' })
            return jwt_decode(data.token)
        } catch (err) {
            const message = 'registration error'
            throw new Error(message)
        }
    }
    static login = async (values: Pick<FormValues, 'email' | 'password'>): Promise<IUser | void> => {
        try {
            const { data } = await axiosConfig.post('/user/login', values)
            localStorage.setItem('token', data.token)
            return jwt_decode(data.token)
        } catch (err) {
            const message = 'login error'
            throw new Error(message)
        }
    }
    static refreshToken = async (): Promise<IUser | void> => {
        try {
            const { data } = await authAxiosConfig.get('/user/refreshToken')
            localStorage.setItem('token', data.token)
            return jwt_decode(data.token)
        } catch (err) {
            console.log('token refresh error')
        }
    }
}
