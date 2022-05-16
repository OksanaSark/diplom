import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { AuthForm } from '../../components/AuthForm'
import { Logo } from '../../components/Logo'

import Icons from '../../assets/media/icons/Icons'
import { Routes } from '../../routes'

import AuthComponent from './styles'

export const Auth = () => {
    const location = useLocation()
    const isRegistration = location.pathname === Routes.RegistrationRoute

    return (
        <AuthComponent>
            <div className={'loginContainer'}>
                <Logo />
                <p className={'title'}>Добро пожаловать</p>
                <AuthForm isRegistration={isRegistration} />
                {!isRegistration
                && <NavLink className={'registration'} to={Routes.RegistrationRoute}>
                    <p className={'registrationText'}>Зарегистрироваться</p>
                    <img src={Icons.ArrowRight} className={'arrowIcon'}/>
                </NavLink>
                }
            </div>
        </AuthComponent>
    )
}
