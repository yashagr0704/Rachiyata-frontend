import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: flex-start;
  gap: 18px;
  @media (max-width: 900px) {
    align-items: center;
  }
`

export const Heading = styled(Typography)`
  font-weight: 700;
  line-height: 1.43;
  color: ${props => props.theme.palette.secondary.main};
  max-width: 540px;
  text-align: start;
  font-size: 50px;
  @media (max-width: 1310px) {
    font-size: 44px;
  }
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 560px) {
    font-size: 40px;
  }
  @media (max-width: 470px) {
    font-size: 35px;
  }
  @media (max-width: 408px) {
    font-size: 33px;
  }
  @media (max-width: 370px) {
    font-size: 30px;
  }
  @media (max-width: 340px) {
    font-size: 28px;
    line-height: 1.63;
  }
`

export const SubHeading = styled(Typography)`
  font-weight: 300;
  font-size: 20px;
  color: ${props => props.theme.palette.primary.main};
  text-align: center;
  text-align: start;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 23px;
  }
  @media (max-width: 408px) {
    font-size: 23px;
  }
  @media (max-width: 390px) {
    font-size: 20px;
    margin-bottom: -10px;
  }
`
export const ParagraphText = styled(Typography)`
  font-weight: 300;
  font-size: 17px;
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: start;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 408px) {
    font-size: 15px;
  }
  @media (max-width: 340px) {
    font-size: 14px;
    margin-top: -10px;
  }
`

export const StyledButton = styled(Button)`
  border-radius: 14px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
  padding: 6px 45px;
  @media (max-width: 400px) {
    font-size: 13px;
    padding: 5px 30px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`
