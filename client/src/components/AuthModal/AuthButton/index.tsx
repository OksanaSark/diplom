import React from 'react'

import AuthButtonComponent from './styles'

export interface TestProps {
    className?: string,
    text?: string,
    disabled?: boolean,
}

export const AuthButton = (props: TestProps) => {
    return (
        <AuthButtonComponent className={props.className} disabled={props.disabled}>
            {props.text}
        </AuthButtonComponent>
    )
}
