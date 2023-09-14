import React, { useCallback } from 'react'
import styled from '@emotion/styled'

import RatingBar from './RatingBar'

const RatingSection = ({ item }) => {
  const getRatingBySequence = useCallback(
    sequence => {
      return Number(item?.[`rating_parameter${sequence}`]?.[`parameter${sequence}__avg`]).toFixed(2)
    },
    [item],
  )

  return (
    <Root>
      <RatingBar label="Writing Quality" rating={getRatingBySequence(1)} />
      <RatingBar label="Stability of Updates" rating={getRatingBySequence(2)} />
      <RatingBar label="Story Development" rating={getRatingBySequence(3)} />
      <RatingBar label="Character Design" rating={getRatingBySequence(4)} />
      <RatingBar label="World Background" rating={getRatingBySequence(5)} />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export default RatingSection
