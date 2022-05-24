import React from 'react'

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

export const ProfileTabSelector = (props: ProfileTabSelectorProps) => {
    const { activeTab, setActiveTab } = props

    const tabSwitcher = (tab: string): void => {
        setActiveTab(tab)
        if (tab === tabs.logOut) {
            setActiveTab(tabs.logOut)
            userStore.setUser(null)
            userStore.setIsAuth(false)
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
}
