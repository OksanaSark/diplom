import React from 'react'

import { Images } from '../../../assets/media/images/Images'

import LogoComponent from './styles'

export const Logo = () => {
    return (
        <LogoComponent>
            <div className='line' />
            <div className='logo'>
                <img src={Images.Logo} className='logoImg' />
            </div>
            <div className='line' />
        </LogoComponent>
    )
}

