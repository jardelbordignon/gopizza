import React, { ReactNode } from 'react'
import { Text } from 'react-native'

import theme from 'src/theme'

type TxtProps = {
  font?: 'Bold' | 'ExtraBold' | 'Light' | 'Medium' | 'Regular' | 'SemiBold'
  color?: keyof typeof theme.COLORS
  size?: number
  lineH?: number
  to?: 'capitalize' | 'lowercase' | 'uppercase'
  m?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number
  my?: number
  mx?: number
  children: ReactNode
}

export const Txt = (props: TxtProps) => (
  <Text
    style={{
      fontFamily: `Poppins-${props.font || 'Medium'}`,
      fontSize: props.size || 16,
      lineHeight: props.lineH,
      color: `${theme.COLORS[props.color || 'TITLE']}`,
      textTransform: props.to,
      margin: props.m,
      marginVertical: props.my,
      marginHorizontal: props.mx,
      marginTop: props.mt,
      marginRight: props.mr,
      marginBottom: props.mb,
      marginLeft: props.ml,
    }}>
    {props.children}
  </Text>
)
