import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { Images } from '../../../assets/media/images/Images'
import { userStore } from '../../../store/UserStore'
import { AuthButton } from '../../AuthModal/AuthButton'

import ProfileInfoComponent from './styles'

const adminOptions: Array<string> = ['Категории', 'Товары']

const ProfileInfo = observer(() => {
    const user = userStore.user
    const [activeBtnIndex, setActiveBtnIndex] = useState<number>(-1)

    const buttonShowingHandler = (btnIndex: number) => {
        if (btnIndex === activeBtnIndex) {
            setActiveBtnIndex(-1)
        } else {
            setActiveBtnIndex(btnIndex)
        }
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
            {user?.role !== 'ADMIN' && <div className='adminPanelContainer'>
                <p className='title'>Панель управления</p>
                <div className='optionsContainer'>
                    {adminOptions.map((item, index) =>
                        <React.Fragment key={index}>
                            <AuthButton
                                className='loginBtn'
                                text={item}
                                onClick={() => buttonShowingHandler(index)}
                            />
                            {activeBtnIndex === index && <div className='options'>
                                <AuthButton text='Создать'/>
                                <AuthButton text='Удалить' />
                            </div>
                            }
                        </React.Fragment>,
                    )}
                </div>
            </div>
            }
        </ProfileInfoComponent>
    )
})

export default ProfileInfo
