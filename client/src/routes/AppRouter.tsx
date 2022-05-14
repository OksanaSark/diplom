import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { observer } from 'mobx-react-lite'

import { UserStore } from '../store/UserStore'

import { authRoutes, publicRoutes } from './routes'

export const AppRouter = observer((): JSX.Element => {
    const isAuth: boolean = new UserStore().isAuth

    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />,
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />,
            )}
        </Routes>
    )
})
