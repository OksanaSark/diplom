import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { observer } from 'mobx-react-lite'

import { User } from '../store/UserStore'

import { authRoutes, publicRoutes } from './routes'

export const AppRouter = observer((): JSX.Element => {
    return (
        <Routes>
            {User.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />,
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />,
            )}
        </Routes>
    )
})
