import React from 'react'

import * as S from './styles'

interface IPicture {
  uri: string | null
}

export const Picture = ({ uri }: IPicture) => {
  if (uri) return <S.Image source={{ uri }} />

  return (
    <S.PlaceholderWrapper>
      <S.Placeholder>Nenhuma foto{'\n'}carregada</S.Placeholder>
    </S.PlaceholderWrapper>
  )
}
