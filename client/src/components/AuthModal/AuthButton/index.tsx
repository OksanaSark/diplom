import React from 'react'

import AuthButtonComponent from './styles'

export interface AuthButtonProps {
    className?: string,
    text?: string,
    disabled?: boolean,
}

export const AuthButton = (props: AuthButtonProps) => {
    return (
        <AuthButtonComponent className={props.className} disabled={props.disabled}>
            {props.text}
        </AuthButtonComponent>
    )
}
