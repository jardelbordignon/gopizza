import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Platform } from 'react-native'
import { useTheme } from 'styled-components/native'

import { BottomMenu } from 'src/components'
import { Home } from 'src/screens/public/Home'
import { Orders } from 'src/screens/public/Orders'

const { Navigator, Screen } = createBottomTabNavigator()

export const PublicTabRoutes = () => {
  const { COLORS } = useTheme()
  const isIos = Platform.OS === 'ios'

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
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title={'Pedidos'} color={color} notifications="1" />
          ),
        }}
      />
    </Navigator>
  )
}
