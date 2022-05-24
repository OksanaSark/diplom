import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { NavBarInput } from './NavBarInput'
import { Icons } from '../../assets/media/icons/Icons'
import { Images } from '../../assets/media/images/Images'
import { Routes } from '../../routes'
import { userStore } from '../../store/UserStore'
import { AuthModal } from '../AuthModal'

import NavBarComponent from './styles'

export const NavBar = observer(() => {
    const navigate = useNavigate()
    const [isAuthModalOpen, setIsAuthModalOpen] = React.useState<boolean>(false)

    const authHandler = () => {
        if (userStore.isAuth) {
            navigate(Routes.ProfileRoute)
        } else {
            setIsAuthModalOpen(true)
        }
    }

    return (
        <NavBarComponent>
            <NavLink to={Routes.ShopRoute} className='logoContainer'>
                <div className='logoImgContainer'>
                    <img src={Images.Logo} className='logoImg' />
                </div>
                <p className='logoTitle'>ЮГР</p>
            </NavLink>
            <NavBarInput />
            <div className='tabsContainer'>
                <NavLink to={Routes.OrdersRoute} className='tabContainer'>
                    <img className='ordersIcon' src={Icons.Orders} />
                    <p className='tabTitle'>Заказы</p>
                </NavLink>
                <div className='tabContainer' onClick={authHandler}>
                    <img className='userIcon' src={Icons.User} />
                    <p className='tabTitle'>{userStore.isAuth ? 'Профиль' : 'Войти'}</p>
                </div>
                <NavLink to={Routes.BasketRoute} className='tabContainer'>
                    <img className='basketIcon' src={Icons.Basket} />
                    <p className='tabTitle'>Корзина</p>
                </NavLink>
            </div>
            <AuthModal isAuthModalOpen={isAuthModalOpen} setIsAuthModalOpen={setIsAuthModalOpen} />
        </NavBarComponent>
    )
})
