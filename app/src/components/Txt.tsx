import React, { ReactNode } from 'react'
import { Text } from 'react-native'

type TxtProps = {
  font?: 'regular' | 'light' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold'
  color?: string
  size?: number
  lineH?: number
  to?: 'capitalize' | 'uppercase' | 'lowercase'
  children: ReactNode
}

export const Txt = (props: TxtProps) => (
  <Text
    style={{
      fontFamily: `Poppins-${props.font || 'medium'}`,
      fontSize: props.size || 16,
      lineHeight: props.lineH,
      color: props.color,
      textTransform: props.to,
    }}>
    {props.children}
  </Text>
)
