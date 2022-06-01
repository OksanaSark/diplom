import React from 'react'

import AuthButtonComponent from './styles'

export interface AuthButtonProps {
    className?: string,
    text?: string,
    disabled?: boolean,
    onClick?: () => void
}

export const AuthButton = (props: AuthButtonProps) => {
    const { className, text, disabled, onClick } = props

    return (
        <AuthButtonComponent
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </AuthButtonComponent>
    )
}
