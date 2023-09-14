import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const HeadingRoot = styled(Typography)`
  margin-bottom: 10px;
  @media (max-width: 558px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
  @media (max-width: 381px) {
    font-size: 28px;
  }
  @media (max-width: 358px) {
    font-size: 25px;
  }
`

const Heading = ({ children, ...props }) => {
  return (
    <HeadingRoot color="secondary" variant="h3" fontSize={44} fontWeight={700} {...props}>
      {children}
    </HeadingRoot>
  )
}

export default Heading
