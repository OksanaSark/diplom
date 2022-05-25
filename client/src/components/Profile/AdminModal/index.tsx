import React from 'react'
import Modal from 'react-modal'

import AdminModalComponent, { customModalStyle } from './styles'

interface AdminModalProps {
    isAdminModalOpen: boolean,
    closeAdminModal: () => void,
    children: JSX.Element
}

export const AdminModal = (props: AdminModalProps) => {
    const { isAdminModalOpen, closeAdminModal, children } = props

    return (
        <Modal
            isOpen={isAdminModalOpen}
            style={customModalStyle}
            ariaHideApp={false}
            onRequestClose={closeAdminModal}
        >
            <AdminModalComponent>
                {children}
            </AdminModalComponent>
        </Modal>
    )
}
