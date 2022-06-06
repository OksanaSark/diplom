import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { useFetchBasket } from '../../hooks/useFetchBasket'
import { muiTheme } from '../../globalStyles'
import { AppRouter } from '../../routes/AppRouter'
import { userStore } from '../../store/UserStore'
import { NavBar } from '../NavBar'

import { MainComponent } from './styles'

export const Main = observer(() => {
    useFetchBasket()
    useEffect(() => {
        userStore.refreshToken()
    }, [])

    return (
        <MainComponent>
            <ThemeProvider theme={muiTheme}>
                <NavBar />
                <AppRouter />
            </ThemeProvider>
        </MainComponent>
    )
})
