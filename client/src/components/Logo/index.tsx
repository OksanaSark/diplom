import React from 'react'

import Images from '../../assets/media/images/Images'

import LogoComponent from './style'

export const Logo = () => {
    return (
        <LogoComponent>
            <div className={'logoContent'}>
                <div className={'line'} />
                <div className={'logo'}>
                    <img src={Images.Logo} className={'logoImg'}/>
                </div>
                <div className={'line'} />
            </div>
            <p className={'title'}>Добро пожаловать</p>
        </LogoComponent>
    )
}

