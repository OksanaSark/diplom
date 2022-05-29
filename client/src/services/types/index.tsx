export enum StatusEnum {
    error,
    success,
    loading,
    initial
}

export type ProductListType = {
    count: number,
    rows: IProduct[]
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
    rateInfo: IRating
    info: IProductInfo[]
    img: string,
    categoryId: number
}

export interface ICategory {
    id: number
    name: string
}

export interface IAddedProducts extends IProduct {
    count: number
}
