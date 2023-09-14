import styled from '@emotion/styled'
import { Typography } from '@mui/material'

const ParagraphRoot = styled(Typography)`
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
  @media (max-width: 381px) {
    font-size: 1.1rem;
  }
  @media (max-width: 358px) {
    font-size: 1rem;
  }
`

const Paragraph = ({ children, ...props }) => {
  return (
    <ParagraphRoot variant="subtitle1" {...props}>
      {children}
    </ParagraphRoot>
  )
}

export default Paragraph
