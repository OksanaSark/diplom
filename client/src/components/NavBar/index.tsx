import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavBarInput } from './NavBarInput'
import { Icons } from '../../assets/media/icons/Icons'
import { Images } from '../../assets/media/images/Images'
import { Routes } from '../../routes'
import { AuthModal } from '../AuthModal'

import NavBarComponent from './styles'

export const NavBar = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState<boolean>(false)

    const onOpenAuthModal = () => {
        setIsAuthModalOpen(true)
    }

    return (
        <NavBarComponent>
            <NavLink to={Routes.ShopRoute} className='logoContainer'>
                <img src={Images.Logo} className='logoImg' />
                <p className='logoTitle'>ЮГР</p>
            </NavLink>
            <NavBarInput />
            <div className='tabsContainer'>
                <NavLink to={Routes.OrdersRoute} className='tabContainer'>
                    <img className='ordersIcon' src={Icons.Orders} />
                    <p className='tabTitle'>Заказы</p>
                </NavLink>
                <div className='tabContainer' onClick={onOpenAuthModal}>
                    <img className='userIcon' src={Icons.User} />
                    <p className='tabTitle'>Войти</p>
                </div>
                <NavLink to={Routes.BasketRoute} className='tabContainer'>
                    <img className='basketIcon' src={Icons.Basket} />
                    <p className='tabTitle'>Корзина</p>
                </NavLink>
            </div>
            <AuthModal isAuthModalOpen={isAuthModalOpen} setIsAuthModalOpen={setIsAuthModalOpen} />
        </NavBarComponent>
    )
}
