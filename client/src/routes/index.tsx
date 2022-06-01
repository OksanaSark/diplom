import { Basket } from '../pages/Basket'
import Orders from '../pages/Orders'
import { ProductDetails } from '../pages/ProductDetails'
import { Profile } from '../pages/Profile'
import { Shop } from '../pages/Shop'

export enum Routes {
    ShopRoute = '/',
    OrdersRoute = '/orders',
    BasketRoute = '/basket',
    ProductRoute = '/product',
    ProfileRoute = '/profile'
}

export const authRoutes = [
    {
        path: Routes.OrdersRoute,
        Component: Orders,
    },
    {
        path: Routes.BasketRoute,
        Component: Basket,
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
        path: Routes.ProductRoute + '/:id',
        Component: ProductDetails,
    },
]
