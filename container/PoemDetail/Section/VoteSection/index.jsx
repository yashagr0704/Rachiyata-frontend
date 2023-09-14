import styled from '@emotion/styled'
import React from 'react'
import TollOutlinedIcon from '@mui/icons-material/TollOutlined'
import { Button, Skeleton, Typography, useMediaQuery } from '@mui/material'
import { blue } from '@mui/material/colors'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded'
import HowToVoteRoundedIcon from '@mui/icons-material/HowToVoteRounded'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded'

const VoteSection = ({ isLoading }) => {
  const isMobile = useMediaQuery('(max-width: 500px)')

  if (isLoading)
    return (
      <Root>
        <LoadingMain>
          <StyledSkeleton variant="rounded" />
        </LoadingMain>
      </Root>
    )

  const isVoted = false
  return (
    <Root>
      <Main>
        <Field>
          <HowToVoteRoundedIcon color="primary" style={{ fontSize: isMobile ? 40 : 55 }} />
          <Text style={{ fontSize: isMobile && 15 }}>Votes are held every day to rank your favorite Novel</Text>
        </Field>
        <Bottom>
          <InfoSection>
            <VoteInfoField>
              <StarBorderRoundedIcon color="primary" style={{ fontSize: isMobile ? 40 : 55 }} />
              <HighlightedText variant="h6" component="div" color="secondary">
                #200
              </HighlightedText>
            </VoteInfoField>
            <VoteInfoField>
              <TollOutlinedIcon sx={{ color: blue[500], fontSize: isMobile ? 40 : 55 }} />
              <HighlightedText variant="h6" component="div" color="secondary">
                600
              </HighlightedText>
            </VoteInfoField>
          </InfoSection>
          {/* <TollOutlinedIcon sx={{ color: blue[500] }} /> 0 */}
          <VoteButton
            disabled={isVoted}
            is_voted={String(isVoted)}
            variant="contained"
            color={isVoted ? 'secondary' : 'primary'}>
            {isVoted ? (
              <AddTaskRoundedIcon sx={{ fontSize: isMobile ? 35 : 45 }} />
            ) : (
              <KeyboardDoubleArrowUpRoundedIcon sx={{ fontSize: isMobile ? 35 : 45 }} />
            )}
          </VoteButton>
        </Bottom>
      </Main>
    </Root>
  )
}

const LoadingMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 20px;
  }
`

const StyledSkeleton = styled(Skeleton)`
  min-height: 103px;
  width: 100%;
  max-width: 100%;
  @media (max-width: 780px) {
    min-height: 153px;
  }
`

const Root = styled.div`
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 780px) {
    margin-top: 10px;
  }
`

const Main = styled.div`
  position: relative;
  padding: 15px;
  box-shadow: 3px 3px 21px 1px rgba(98, 0, 255, 0.1);
  border-radius: 18px;
  transition: 0.3s ease-in-out;
  border: 2px solid transparent;
  :hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  }
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 780px) {
    flex-direction: column;
    gap: 20px;
  }
`

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 1;
  svg {
    font-size: 1.5rem;
  }
  span {
    margin-top: 2px;
    margin-bottom: 2px;
    @media (max-width: 400px) {
      margin-top: 2px;
      margin-bottom: 1px;
    }
  }
`

const Bottom = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 780px) {
    justify-content: space-between;
  }
`

const Text = styled(Typography)`
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  letter-spacing: 0.1px;
  line-height: 1.5;
`

const VoteInfoField = styled.div`
  display: flex;
  position: relative;
  padding: 5px 10px 5px 5px;
  border-radius: 15px;
  transition: 0.3s ease-in-out;
  border: 2px solid ${({ theme }) => theme.palette.primary.main}25;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`

const HighlightedText = styled(Typography)`
  font-weight: 600;
`

const InfoSection = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
  @media (max-width: 780px) {
    margin-left: 0px;
    margin-right: auto;
  }
`

const VoteButton = styled(Button)`
  border-radius: 15px;
  box-shadow: none;
  min-width: 69px;
  width: 69px;
  && {
    color: ${({ is_voted }) => is_voted === 'true' && '#fff'};
    background: ${({ theme, is_voted }) => is_voted === 'true' && theme.palette.secondary.main};
  }
`

export default VoteSection
