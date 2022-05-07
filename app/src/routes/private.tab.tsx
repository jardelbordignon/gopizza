import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { useTheme } from 'styled-components/native'

import { BottomMenu } from 'src/components'
import { useNotificationsLazyQuery } from 'src/gql/genApiDocs'
import { Home } from 'src/screens/private/Home'
import { OrderForm, OrderList } from 'src/screens/private/Order'

const { Navigator, Screen } = createBottomTabNavigator()

export const PrivateTabRoutes = () => {
  const [notifications, setNotifications] = useState('0')
  const { COLORS } = useTheme()
  const isIos = Platform.OS === 'ios'

  const [notificationsQuery] = useNotificationsLazyQuery()

  const loadNotifications = async () => {
    const res = await notificationsQuery()
    if (res.data) setNotifications(String(res.data.orders.totalCount))
  }

  useEffect(() => {
    loadNotifications()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        // tabBarInactiveBackgroundColor: COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 45,
          paddingVertical: isIos ? 20 : 0,
        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title={'Cardápio'} color={color} />
          ),
        }}
      />
      <Screen
        name="orders"
        component={OrderList}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu
              title={'Pedidos'}
              color={color}
              notifications={notifications}
            />
          ),
        }}
      />

      <Screen
        name="order"
        component={OrderForm}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title={'Novo pedido'} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
