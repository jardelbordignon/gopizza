import React from 'react'
import { StatusBar, View } from 'react-native'

import { Demo } from 'src/screens/Demo'

export const App = () => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} />

      <Demo />
    </View>
  )
}
