import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

// import { Dashboard } from 'src/screens/private/Dashboard'
import { Home } from 'src/screens/private/Home'
import { Product } from 'src/screens/private/Product'
import { SignIn } from 'src/screens/public/SignIn'

import { PrivateTabRoutes } from './private.tab'

const { Navigator, Screen } = createNativeStackNavigator()

export const PrivateStackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="privateTabRoutes" component={PrivateTabRoutes} />
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}
