import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Badge } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { NavBarInput } from './NavBarInput'
import { Strings } from './strings'
import { Icons } from '../../assets/media/icons/Icons'
import { Images } from '../../assets/media/images/Images'
import { Routes } from '../../routes'
import { basketStore } from '../../store/BasketStore'
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
                <p className='logoTitle'>{Strings.yugr}</p>
            </NavLink>
            <NavBarInput />
            <div className='tabsContainer'>
                {userStore.isAuth && <NavLink to={Routes.OrdersRoute} className="tabContainer">
                    <img className="ordersIcon" src={Icons.Orders}/>
                    <p className="tabTitle">{Strings.orders}</p>
                </NavLink>}
                <div className='tabContainer' onClick={authHandler}>
                    <img className='userIcon' src={Icons.User} />
                    <p className='tabTitle'>{userStore.isAuth ? Strings.profile : Strings.logIn}</p>
                </div>
                {userStore.isAuth && <NavLink to={Routes.BasketRoute} className='tabContainer'>
                    <Badge badgeContent={basketStore.products.length} color='info' overlap='circular' showZero={false}>
                        <img className='basketIcon' src={Icons.Basket} />
                    </Badge>
                    <p className='tabTitle'>{Strings.basket}</p>
                </NavLink>}
            </div>
            <AuthModal isAuthModalOpen={isAuthModalOpen} setIsAuthModalOpen={setIsAuthModalOpen} />
        </NavBarComponent>
    )
})
