import React, { useState } from 'react'

import * as S from './styles'

type PictureProps = S.PictureStyleProps & {
  uri?: string | null
}

export const Picture = ({ uri, size, rounded }: PictureProps) => {
  const [valid, setValid] = useState(true)

  // useEffect(() => setValid(true), [uri])

  if (typeof uri === 'string' && valid) {
    return (
      <S.Image
        source={{ uri }}
        size={size}
        rounded={rounded}
        onError={() => setValid(false)}
      />
    )
  }

  return (
    <S.PlaceholderWrapper size={size} rounded={rounded}>
      <S.Placeholder>Nenhuma foto{'\n'}carregada</S.Placeholder>
    </S.PlaceholderWrapper>
  )
}
