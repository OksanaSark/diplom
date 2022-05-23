import React from 'react'

import AuthButtonComponent from './styles'

export interface AuthButtonProps {
    className?: string,
    text?: string,
    disabled?: boolean,
}

export const AuthButton = (props: AuthButtonProps) => {
    const { className, text, disabled } = props

    return (
        <AuthButtonComponent className={className} disabled={disabled}>
            {text}
        </AuthButtonComponent>
    )
}
