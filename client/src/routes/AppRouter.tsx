import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { SHOP_ROUTE } from '../utils/consts'

import { authRoutes, publicRoutes } from './routes'

export const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component()} />,
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component()} />,
            )}
            <Navigate to={SHOP_ROUTE} />
        </Routes>
    )
}
