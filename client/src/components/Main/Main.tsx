import React from 'react'

import { AppRouter } from '../../routes/AppRouter'
import { NavBar } from '../NavBar'

import { MainComponent } from './styles'

export const Main = () => {
    return (
        <MainComponent>
            <NavBar />
            <AppRouter />
        </MainComponent>
    )
}
