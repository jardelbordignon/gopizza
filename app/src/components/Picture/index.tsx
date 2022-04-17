import React from 'react'

import * as S from './styles'

interface IPicture {
  uri: string | null
  size?: string
}

export const Picture = ({ uri, size }: IPicture) => {
  if (uri) return <S.Image source={{ uri }} size={size} />

  return (
    <S.PlaceholderWrapper size={size}>
      <S.Placeholder>Nenhuma foto{'\n'}carregada</S.Placeholder>
    </S.PlaceholderWrapper>
  )
}
