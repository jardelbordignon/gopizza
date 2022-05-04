import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { SignIn } from 'src/screens/public/SignIn'

const { Navigator, Screen } = createNativeStackNavigator()

export const PublicStackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}
