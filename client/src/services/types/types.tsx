export enum StatusEnum {
    error,
    success,
    loading,
    initial
}

export interface IUser {
    id: number
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    password: boolean
    role: string
}

export interface IRating {
    isRated: boolean
    rate: number
}

export interface IProductInfo {
    productId: number
    title: string
    description: string
}

export interface IProduct {
    id: number
    name: string
    price: number
    rating: IRating
    info: IProductInfo
    img: string,
    categoryId: number
}

export interface ICategory {
    id: number
    name: string
}
