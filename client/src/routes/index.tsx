import { Admin } from '../pages/Admin'
import { Auth } from '../pages/Auth'
import { Orders } from '../pages/Orders'
import { ProductDetails } from '../pages/ProductDetails'
import { ProductsList } from '../pages/ProductsList'
import { Shop } from '../pages/Shop'

export enum Routes {
    AdminRoute = '/admin',
    LoginRoute = '/login',
    RegistrationRoute = '/registration',
    ShopRoute = '/',
    OrdersRoute = '/orders',
    ProductListRoute = '/products',
    ProductRoute = '/product'
}

export const authRoutes = [
    {
        path: Routes.AdminRoute,
        Component: Admin,
    },
    {
        path: Routes.OrdersRoute,
        Component: Orders,
    },
]

export const publicRoutes = [
    {
        path: Routes.ShopRoute,
        Component: Shop,
    },
    {
        path: Routes.LoginRoute,
        Component: Auth,
    },
    {
        path: Routes.RegistrationRoute,
        Component: Auth,
    },
    {
        path: Routes.ProductListRoute,
        Component: ProductsList,
    },
    {
        path: Routes.ProductRoute + '/:id',
        Component: ProductDetails,
    },
]
