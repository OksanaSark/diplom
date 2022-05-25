import { makeAutoObservable } from 'mobx'

import { FormValues } from '../components/AuthModal/AuthForm'
import { UserApiClass } from '../services/api/UserApi'
import { IUser, StatusEnum } from '../services/types/types'

class UserStore {
    private _isAuth: boolean
    private _user: IUser | null
    private _status: StatusEnum

    constructor() {
        this._isAuth = false
        this._user = null
        this._status = StatusEnum.initial
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get status() {
        return this._status
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth
    }
    setUser(user: IUser | null) {
        this._user = user
    }
    setStatus(status: StatusEnum) {
        this._status = status
    }

    async registration(values: FormValues) {
        try {
            this.setStatus(StatusEnum.loading)
            const user = await UserApiClass.registration(values)
            if (user) {
                this.setStatus(StatusEnum.success)
                this.setUser(user)
                this.setIsAuth(true)
            } else {
                throw new Error('User was not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }

    async login(values: Pick<FormValues, 'email' | 'password'>) {
        try {
            this.setStatus(StatusEnum.loading)
            const user = await UserApiClass.login(values)
            if (user) {
                this.setStatus(StatusEnum.success)
                this.setUser(user)
                this.setIsAuth(true)
            } else {
                throw new Error('User was not returned')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }

    async refreshToken() {
        try {
            this.setStatus(StatusEnum.loading)
            const user = await UserApiClass.refreshToken()
            if (user) {
                this.setStatus(StatusEnum.success)
                this.setUser(user)
                this.setIsAuth(true)
            } else {
                console.log('User was not returned(unauthorized)')
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }
}

export const userStore = new UserStore()
