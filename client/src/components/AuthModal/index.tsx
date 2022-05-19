import React, { useState } from 'react'
import Modal from 'react-modal'

import { Icons } from '../../assets/media/icons/Icons'

import { AuthForm } from './AuthForm'
import { Logo } from './Logo'
import AuthModalComponent, { customModalStyle } from './styles'

interface AuthModalProps {
    isAuthModalOpen: boolean;
    setIsAuthModalOpen: (authModalIsOpen: boolean) => void;
}

enum AuthStep {
    LOGIN = 'Login',
    REGISTRATION = 'Registration'
}

export const AuthModal = (props: AuthModalProps) => {
    const [authStep, setAuthStep] = useState<AuthStep>(AuthStep.LOGIN)
    const isLogin = authStep === 'Login'

    const closeModal = (): void => {
        setAuthStep(AuthStep.LOGIN)
        props.setIsAuthModalOpen(false)
    }

    const onRegistration = (): void => {
        setAuthStep(AuthStep.REGISTRATION)
    }

    return (
        <Modal
            isOpen={props.isAuthModalOpen}
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
