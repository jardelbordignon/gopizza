import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Home } from 'src/screens/public/Home'
import { Order } from 'src/screens/public/Order'
import { Orders } from 'src/screens/public/Orders'
import { Product } from 'src/screens/public/Product'
import { SignIn } from 'src/screens/public/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export const PublicRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="orders" component={Orders} />
      <Screen name="order" component={Order} />
      <Screen name="home" component={Home} />
      <Screen name="product" component={Product} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}
