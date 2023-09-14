import React from 'react'
import styled from '@emotion/styled'
import {
  Accordion,
  AccordionDetails,
  accordionDetailsClasses,
  AccordionSummary,
  accordionSummaryClasses,
  Typography,
} from '@mui/material'
import StyledButton from './StyledButton'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

const AccordionBox = ({ isOpened, setOpenedIdx, item, idx }) => {
  return (
    <Root expanded={isOpened}>
      <Summary
        onClick={() => {
          setOpenedIdx(isOpened ? '' : idx)
        }}
        expandIcon={<ExpandMoreRoundedIcon style={{ color: '#5426C3', fontSize: '32px' }} />}>
        <Heading>{item.contentType}</Heading>
      </Summary>
      <Details>
        {item?.categoryList?.map((category, idx) => (
          <StyledButton key={idx} category={category} contentType={item.contentType.toLowerCase()} />
        ))}
      </Details>
    </Root>
  )
}

const Root = styled(Accordion)`
  box-shadow: none;
  width: 100%;
  margin-bottom: -5px;
  padding: 0px;
  && {
    &::before {
      height: 3px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.palette.primary.main}19;
      opacity: 1;
    }
  }
`

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.1px;
`

const Summary = styled(AccordionSummary)`
  &.${accordionSummaryClasses.root} {
    padding-left: 0px;
    padding: 0px;
  }
`

const Details = styled(AccordionDetails)`
  &.${accordionDetailsClasses.root} {
    margin-top: -5px;
    margin-bottom: -15px;
    padding-left: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 15px;
  }
`

export default AccordionBox
