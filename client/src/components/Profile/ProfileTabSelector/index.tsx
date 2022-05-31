import React from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { userStore } from '../../../store/UserStore'

import ProfileTabSelectorComponent from './styles'

export const tabs = {
    orders: 'История заказов',
    profile: 'Профиль',
    logOut: 'Выйти',
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
        if (tab === tabs.logOut) {
            setActiveTab(tabs.logOut)
            await localStorage.removeItem('token')
            await userStore.setUser(null)
            await userStore.setIsAuth(false)
            navigate('/')
        }
    }

    return (
        <ProfileTabSelectorComponent>
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
        </ProfileTabSelectorComponent>
    )
})
