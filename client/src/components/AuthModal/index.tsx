import React, { useState } from 'react'
import Modal from 'react-modal'
import { observer } from 'mobx-react-lite'

import { AuthForm } from './AuthForm'
import { Logo } from './Logo'
import { Icons } from '../../assets/media/icons/Icons'
import { StatusEnum } from '../../services/types'
import { userStore } from '../../store/UserStore'

import AuthModalComponent, { customModalStyle } from './styles'

interface AuthModalProps {
    isAuthModalOpen: boolean;
    setIsAuthModalOpen: (authModalIsOpen: boolean) => void;
}

enum AuthStep {
    LOGIN = 'Login',
    REGISTRATION = 'Registration'
}

export const AuthModal = observer((props: AuthModalProps) => {
    const { isAuthModalOpen, setIsAuthModalOpen } = props
    const [authStep, setAuthStep] = useState<AuthStep>(AuthStep.LOGIN)
    const isLogin = authStep === 'Login'

    const closeModal = (): void => {
        setAuthStep(AuthStep.LOGIN)
        setIsAuthModalOpen(false)
        userStore.setStatus(StatusEnum.initial)
    }

    const onRegistration = (): void => {
        setAuthStep(AuthStep.REGISTRATION)
    }

    return (
        <Modal
            isOpen={isAuthModalOpen}
            style={customModalStyle}
            ariaHideApp={false}
            onRequestClose={closeModal}
        >
            <AuthModalComponent>
                <Logo />
                <p className='title'>Добро пожаловать</p>
                <AuthForm isLogin={isLogin} setIsAuthModalOpen={setIsAuthModalOpen} />
                {isLogin
                    && <div className='registration' onClick={onRegistration}>
                        <p className='registrationText'>Зарегистрироваться</p>
                        <img src={Icons.ArrowRight} className='arrowIcon' />
                    </div>
                }
            </AuthModalComponent>
        </Modal>
    )
})
