import { makeAutoObservable } from 'mobx'

import { IUser } from '../servises/types/types'

export default class UserStore {
    private _isAuth: boolean
    private _user: object = {}
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth
    }
    setUser(user: IUser) {
        this._user = user
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}
