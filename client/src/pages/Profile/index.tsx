import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { ProfileInfo } from '../../components/Profile/ProfileInfo'
import { ProfileTabSelector, tabs } from '../../components/Profile/ProfileTabSelector'
import { Orders } from '../Orders'

import { ProfileComponent } from './styles'

export const Profile = observer(() => {
    const [activeTab, setActiveTab] = useState(tabs.profile)

    return (
        <ProfileComponent>
            <ProfileTabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === tabs.profile && <ProfileInfo />}
            {activeTab === tabs.orders && <Orders />}
        </ProfileComponent>
    )
})
