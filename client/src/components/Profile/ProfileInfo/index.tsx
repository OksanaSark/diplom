import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { CategoryForm } from './CategoryForm'
import { ProductDeletionForm } from './ProductDeletionForm'
import { ProductCreatingFormContainer } from './ProductCreatingForm/ProductCreatingFormContainer'
import { Images } from '../../../assets/media/images/Images'
import { StatusEnum } from '../../../services/types'
import { categoryStore } from '../../../store/CategoryStore'
import { productStore } from '../../../store/ProductStore'
import { userStore } from '../../../store/UserStore'
import { AuthButton } from '../../AuthModal/AuthButton'
import { AdminModal } from '../AdminModal'

import { ProfileInfoComponent } from './styles'

interface IAdminOption {
    title: string,
    createAction: keyof IActions,
    deleteAction: keyof IActions,
}

interface IActions {
    createCategory: JSX.Element,
    createProduct: JSX.Element,
    deleteCategory: JSX.Element,
    deleteProduct: JSX.Element
}

const adminOptions: IAdminOption[] = [
    {
        title: 'Категории',
        createAction: 'createCategory',
        deleteAction: 'deleteCategory',
    },
    {
        title: 'Продукты',
        createAction: 'createProduct',
        deleteAction: 'deleteProduct',
    },
]

export const ProfileInfo = observer(() => {
    const user = userStore.user
    const [activeBtnIndex, setActiveBtnIndex] = useState<number>(-1)
    const [isAdminModalOpen, setIsAdminModalOpen] = React.useState<boolean>(false)
    const [activeAction, setActiveAction] = useState<keyof IActions>('createCategory')

    const closeAdminModal = () => {
        setIsAdminModalOpen(false)
        categoryStore.setStatus(StatusEnum.initial)
        productStore.setStatus(StatusEnum.initial)
        productStore.setProducts([])
    }

    const actions: IActions = {
        createCategory: <CategoryForm actionType='createCategory' />,
        createProduct: <ProductCreatingFormContainer />,
        deleteCategory: <CategoryForm actionType='deleteCategory' />,
        deleteProduct: <ProductDeletionForm />,
    }

    const buttonShowingHandler = (btnIndex: number) => {
        if (btnIndex === activeBtnIndex) {
            setActiveBtnIndex(-1)
        } else {
            setActiveBtnIndex(btnIndex)
        }
    }

    const actionHandler = (actionType: keyof IActions) => {
        setIsAdminModalOpen(true)
        setActiveAction(actionType)
    }

    return (
        <ProfileInfoComponent>
            <div className='userInfoContainer'>
                <div className='userInfo'>
                    <img src={Images.User} className='userImg' />
                    <p className='userName'>{user?.firstName} {user?.lastName}</p>
                </div>
                <p className='info'>Телефон<span>{user?.phoneNumber}</span></p>
                <p className='info'>Email<span className='phone'>{user?.email}</span></p>
            </div>
            {user?.role === 'ADMIN' && <div className='adminPanelContainer'>
                <p className='title'>Панель управления</p>
                <div className='optionsContainer'>
                    {adminOptions.map((item: IAdminOption, index: number) =>
                        <React.Fragment key={index}>
                            <AuthButton
                                className='loginBtn'
                                text={item.title}
                                onClick={() => buttonShowingHandler(index)}
                            />
                            {activeBtnIndex === index && <div className='options'>
                                <AuthButton
                                    text='Создать'
                                    onClick={() => actionHandler(item.createAction)}
                                />
                                <AuthButton
                                    text='Удалить'
                                    onClick={() => actionHandler(item.deleteAction)}
                                />
                            </div>}
                        </React.Fragment>,
                    )}
                </div>
            </div>
            }
            <AdminModal
                children={actions[activeAction]}
                isModalOpen={isAdminModalOpen}
                closeModal={closeAdminModal}
            />
        </ProfileInfoComponent>
    )
})
