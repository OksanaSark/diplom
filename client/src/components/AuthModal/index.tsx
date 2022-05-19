import React, { useState } from 'react'
import Modal from 'react-modal'

import { Icons } from '../../assets/media/icons/Icons'

import { AuthForm } from './AuthForm'
import { Logo } from './Logo'
import AuthModalComponent, { customModalStyle } from './styles'

interface AuthModalProps {
    authModalIsOpen: boolean;
    setAuthModalIsOpen: (authModalIsOpen: boolean) => void;
}

export const AuthModal = (props: AuthModalProps) => {
    const [isLogin, setIsLogin] = useState<boolean>(true)

    const closeModal = (): void => {
        setIsLogin(true)
        props.setAuthModalIsOpen(false)
    }

    const onRegistration = (): void => {
        setIsLogin(false)
    }

    return (
        <Modal
            isOpen={props.authModalIsOpen}
            style={customModalStyle}
            onRequestClose={closeModal}
        >
            <AuthModalComponent>
                <Logo />
                <p className={'title'}>Добро пожаловать</p>
                <AuthForm isLogin={isLogin} />
                {isLogin
                    && <div className={'registration'} onClick={onRegistration}>
                        <p className={'registrationText'}>Зарегистрироваться</p>
                        <img src={Icons.ArrowRight} className={'arrowIcon'}/>
                    </div>
                }
            </AuthModalComponent>
        </Modal>
    )
}
