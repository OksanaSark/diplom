import { Admin } from '../pages/Admin'
import { Orders } from '../pages/Orders'
import { ProductDetails } from '../pages/ProductDetails'
import { ProductsList } from '../pages/ProductsList'
import { Profile } from '../pages/Profile'
import { Shop } from '../pages/Shop'

export enum Routes {
    AdminRoute = '/admin',
    ShopRoute = '/',
    OrdersRoute = '/orders',
    BasketRoute = '/basket',
    ProductListRoute = '/products',
    ProductRoute = '/product',
    ProfileRoute = '/profile'
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
    {
        path: Routes.BasketRoute,
        Component: Orders,
    },
    {
        path: Routes.ProfileRoute,
        Component: Profile,
    },
]

export const publicRoutes = [
    {
        path: Routes.ShopRoute,
        Component: Shop,
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
