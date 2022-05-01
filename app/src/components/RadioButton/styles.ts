import styled, { css } from 'styled-components/native'

export type RadioButtonStyleProps = {
  selected: boolean
}

export const Wrapper = styled.TouchableOpacity<RadioButtonStyleProps>`
  width: 104px;
  height: 82px;
  border-radius: 8px;
  padding: 14px 16px;

  ${({ theme, selected }) => css`
    border: 1px solid ${theme.COLORS[selected ? 'SUCCESS_900' : 'SHAPE']};
    background-color: ${theme.COLORS[selected ? 'SUCCESS_50' : 'TITLE']};
  `}
`

export const Title = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const Radio = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_900};
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`

export const Selected = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.SUCCESS_900};
`
