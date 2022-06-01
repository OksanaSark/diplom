import React from 'react'
import Modal from 'react-modal'

import { AdminModalComponent, customModalStyle } from './styles'

interface AdminModalProps {
    isModalOpen: boolean,
    closeModal: () => void,
    children: JSX.Element
}

export const AdminModal = (props: AdminModalProps) => {
    const { isModalOpen, closeModal, children } = props

    return (
        <Modal
            isOpen={isModalOpen}
            style={customModalStyle}
            ariaHideApp={false}
            onRequestClose={closeModal}
        >
            <AdminModalComponent>
                {children}
            </AdminModalComponent>
        </Modal>
    )
}
