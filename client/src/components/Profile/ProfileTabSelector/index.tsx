import React from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { userStore } from '../../../store/UserStore'
import { Strings } from '../ProfileInfo/strings'

import ProfileTabSelectorComponent from './styles'

export const tabs = {
    orders: 'История заказов',
    profile: 'Профиль',
}
interface ProfileTabSelectorProps {
    activeTab: string,
    setActiveTab: (tab: string) => void
}

export const ProfileTabSelector = observer((props: ProfileTabSelectorProps) => {
    const { activeTab, setActiveTab } = props
    const navigate = useNavigate()

    const tabSwitcher = async (tab: string): Promise<void> => {
        setActiveTab(tab)
    }

    const logOut = async () => {
        await localStorage.removeItem('token')
        await userStore.setUser(null)
        await userStore.setIsAuth(false)
        navigate('/')
    }

    return (
        <ProfileTabSelectorComponent>
            <div className='tabsContainer'>
                {Object.values(tabs).map((tab, index) => {
                    return (
                        <div key={index}
                            className={activeTab === tab ? 'tab activeTab' : 'tab'}
                            onClick={() => tabSwitcher(tab)}
                        >
                            <p>{tab}</p>
                        </div>
                    )
                })}
            </div>
            <button className='logOutBtn' onClick={logOut}>{Strings.logOut}</button>
        </ProfileTabSelectorComponent>
    )
})
