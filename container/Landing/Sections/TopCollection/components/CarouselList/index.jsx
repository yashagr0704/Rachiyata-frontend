import styled from '@emotion/styled'
import { useState } from 'react'
import { Box } from '@mui/material'
import { wrap } from 'popmotion'
import CarouselBox from './CarouselBox'

const CarouselList = ({ List }) => {
  const messages = List
  const [isViewDisplay, setView] = useState(true)
  const [[page, direction], setPage] = useState([0, 0])
  const msgIndex = wrap(0, messages.length, page)

  const handleViewToggle = () => {
    setView(!isViewDisplay)
  }

  const viewBoxProps = {
    messages,
    pageState: [[page, direction], setPage],
    handleViewToggle,
    msgIndex,
  }

  return (
    <Root>
      <CarouselBox {...viewBoxProps} />
    </Root>
  )
}

export default CarouselList

const Root = styled(Box)`
  position: relative;
  margin-top: 12px;
  height: 100%;
  width: 100%;
`
