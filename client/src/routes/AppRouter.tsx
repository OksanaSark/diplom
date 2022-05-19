import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { userStore } from '../store/UserStore'

import { authRoutes, publicRoutes } from './index'

export const AppRouter = observer((): JSX.Element => {
    return (
        <Routes>
            {userStore.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />,
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />,
            )}
        </Routes>
    )
})
