import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import OrdersHistory from '../../components/Profile/OrdersHistory'
import { ProfileInfo } from '../../components/Profile/ProfileInfo'
import { ProfileTabSelector, tabs } from '../../components/Profile/ProfileTabSelector'

import { ProfileComponent } from './styles'

export const Profile = observer(() => {
    const [activeTab, setActiveTab] = useState(tabs.profile)

    return (
        <ProfileComponent>
            <ProfileTabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === tabs.profile && <ProfileInfo />}
            {activeTab === tabs.orders && <OrdersHistory />}
        </ProfileComponent>
    )
})
