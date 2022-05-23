import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { AppRouter } from '../../routes/AppRouter'
import { userStore } from '../../store/UserStore'
import { NavBar } from '../NavBar'

import { MainComponent } from './styles'

export const Main = observer(() => {
    useEffect(() => {
        userStore.checkToken()
    }, [])

    return (
        <MainComponent>
            <NavBar />
            <AppRouter />
        </MainComponent>
    )
})
