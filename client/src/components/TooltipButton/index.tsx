import React from 'react'
import { IconButton, Tooltip } from '@mui/material'

interface TooltipButtonProps {
    title: string,
    src: string,
    onClick: () => void,
    disabled?: boolean
}

export const TooltipButton = ((props: TooltipButtonProps) => {
    const { title, src, onClick, disabled } = props

    return (
        <Tooltip title={title}>
            <IconButton disabled={disabled} onClick={onClick}>
                <img src={src} />
            </IconButton>
        </Tooltip>
    )
})
