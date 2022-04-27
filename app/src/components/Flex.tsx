/* eslint-disable react-native/no-inline-styles */
import React, { Children, ReactNode, useState } from 'react'
import { FlexStyle, View } from 'react-native'

type GapType = number | [space: number, numCols: number]

type FlexProps = {
  flex?: FlexStyle['flex']
  dir?: FlexStyle['flexDirection']
  basis?: FlexStyle['flexBasis']
  grow?: FlexStyle['flexGrow']
  shrink?: FlexStyle['flexShrink']
  wrap?: FlexStyle['flexWrap']
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  alignSelf?: FlexStyle['alignSelf']
  gap?: GapType
  bg?: string
  p?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number
  py?: number
  px?: number
  m?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number
  my?: number
  mx?: number
  w?: string | number
  maxW?: string | number
  minW?: string | number
  h?: string | number
  maxH?: string | number
  minH?: string | number
  bc?: string
  bw?: number
  br?: number
  btr?: number
  brr?: number
  bbr?: number
  blr?: number
  btlr?: number
  btrr?: number
  bbrr?: number
  bblr?: number
  position?: 'absolute' | 'relative'
  top?: number
  bottom?: number
  left?: number
  right?: number
  zIndex?: number
  children?: ReactNode
}

export const Flex = (props: FlexProps) => {
  const {
    flex = 1,
    dir,
    basis,
    grow,
    shrink,
    wrap = 'wrap',
    justify = 'space-between',
    align = 'center',
    alignSelf,
    gap,
    bg,
    p,
    pt,
    pr,
    pb,
    pl,
    py,
    px,
    m,
    mt,
    mr,
    mb,
    ml,
    my,
    mx,
    w = '100%',
    maxW,
    minW,
    h = 'auto',
    maxH,
    minH,
    bc,
    bw,
    br,
    btr,
    brr,
    bbr,
    blr,
    btlr,
    btrr,
    bbrr,
    bblr,
    position,
    top,
    bottom,
    left,
    right,
    zIndex = 0,
    children,
  } = props

  const [containerDimension, setContainerDimension] = useState({ h: 0, w: 0 })

  return (
    <View
      style={{
        flex,
        flexDirection: dir,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        alignSelf,

        backgroundColor: bg || undefined,

        width: w,
        minWidth: minW,
        maxWidth: maxW,
        height: h,
        minHeight: minH,
        maxHeight: maxH,

        padding: p,
        paddingVertical: py,
        paddingHorizontal: px,
        paddingTop: pt,
        paddingRight: pr,
        paddingBottom: pb,
        paddingLeft: pl,

        margin: m,
        marginVertical: my,
        marginHorizontal: mx,
        marginTop: mt,
        marginRight: mr,
        marginBottom: mb,
        marginLeft: ml,

        borderColor: bc || undefined,
        borderWidth: bw || bc ? 1 : 0,

        borderTopLeftRadius: btlr || btr || blr || br || 0,
        borderTopRightRadius: btrr || btr || brr || br || 0,
        borderBottomLeftRadius: bblr || bbr || blr || br || 0,
        borderBottomRightRadius: bbrr || bbr || brr || br || 0,

        position,
        top,
        bottom,
        left,
        right,

        zIndex,
      }}
      onLayout={event => {
        if (gap)
          setContainerDimension({
            h: Math.floor(event.nativeEvent.layout.height),
            w: Math.floor(event.nativeEvent.layout.width),
          })
      }}>
      {gap
        ? Children.toArray(children).map((child, idx, items) => {
            const space = Array.isArray(gap) ? gap[0] : gap
            const numCols = Array.isArray(gap) ? gap[1] : 1

            const isLastLine =
              idx + numCols < items.length - items.length / numCols

            const style = {
              marginBottom: isLastLine ? 0 : space,
              marginLeft: idx % numCols === 0 ? 0 : space,
            }

            console.log('containerDimension', containerDimension)

            return (
              <View key={idx} style={style}>
                {child}
              </View>
            )
          })
        : children}
    </View>
  )
}
