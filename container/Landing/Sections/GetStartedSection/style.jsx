import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { laptop, mobileL, mobileM, mobileS, tablet, tabletS } from '../../../../styles/mediaQuery/breakPoints'

export const Heading = styled(Typography)`
  text-align: center;
  color: ${props => props.theme.palette.secondary.main};
  font-weight: 800;
  font-size: 4.5em;
  line-height: 1.35;
  span {
    display: block;
  }
`

export const SubHeading = styled(Typography)`
  font-weight: 300;
  font-size: 1.75em;
  text-align: center;
  color: ${props => props.theme.palette.secondary.main};
`
