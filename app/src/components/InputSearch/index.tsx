import React from 'react'
import { TextInputProps } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'styled-components/native'

import * as S from './styles'

type Props = TextInputProps & {
  onSearch: () => void
  onClear: () => void
}

export const InputSearch = ({ onSearch, onClear, ...rest }: Props) => {
  const { COLORS } = useTheme()

  return (
    <S.Wrapper>
      <S.InputArea>
        <S.Input {...rest} />

        <S.ButtonClear onPress={onClear}>
          <Icons name="close" size={16} />
        </S.ButtonClear>
      </S.InputArea>

      <GestureHandlerRootView>
        <S.SearchButton onPress={onSearch}>
          <Icons name="magnify" size={16} color={COLORS.TITLE} />
        </S.SearchButton>
      </GestureHandlerRootView>
    </S.Wrapper>
  )
}
