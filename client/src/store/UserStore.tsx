import { makeAutoObservable } from 'mobx'

import { FormValues } from '../components/AuthModal/AuthForm'
import { UserApiClass } from '../servises/api/UserApi'
import { IUser, StatusEnum } from '../servises/types/types'

class UserStore {
    private _isAuth: boolean
    private _user: IUser | null
    private _status: StatusEnum

    constructor() {
        this._isAuth = false
        this._user = null
        this._status = StatusEnum.success
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
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }

    async checkToken() {
        try {
            this.setStatus(StatusEnum.loading)
            const user = await UserApiClass.checkToken()
            if (user) {
                this.setStatus(StatusEnum.success)
                this.setUser(user)
                this.setIsAuth(true)
            }
        } catch (err) {
            this.setStatus(StatusEnum.error)
        }
    }
}

export const userStore = new UserStore()
