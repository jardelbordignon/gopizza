import React, { useState } from 'react'

import * as S from './styles'

interface IPicture {
  uri?: string | null
  size?: string
}

export const Picture = ({ uri, size }: IPicture) => {
  const [valid, setValid] = useState(true)

  if (typeof uri === 'string' && valid) {
    return (
      <S.Image source={{ uri }} size={size} onError={() => setValid(false)} />
    )
  }

  return (
    <S.PlaceholderWrapper size={size}>
      <S.Placeholder>Nenhuma foto{'\n'}carregada</S.Placeholder>
    </S.PlaceholderWrapper>
  )
}
