import React from 'react'
import styled from '@emotion/styled'

import { Tab, tabClasses, Tabs, tabsClasses, Typography } from '@mui/material'

import LikedCommentListTab from './LikedCommentListTab'
import NewestCommentListTab from './NewestCommentListTab'
import CreateCommentSection from '../CreateCommentSection'

const CommentListView = ({ item, isLoading }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Root>
      <StyledTabs value={value} onChange={handleChange} aria-label="Comment List">
        <StyledTab label="Liked" {...a11yProps(0)} />
        <StyledTab label="Newest" {...a11yProps(1)} />
        <CommentCountText variant="h6" component="div" color="secondary">
          ({item?.comment_count} Comments)
        </CommentCountText>
      </StyledTabs>

      <TabPanel value={value} index={0}>
        <LikedCommentListTab item={item} isLoading={isLoading} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <NewestCommentListTab item={item} isLoading={isLoading} />
      </TabPanel>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const TabPanel = ({ children, value, index }) => {
  return <>{value === index ? children : <></>}</>
}

const a11yProps = index => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const CommentCountText = styled(Typography)`
  font-weight: 600;
  align-self: center;
`

const StyledTab = styled(Tab)`
  display: flex;
  justify-content: start;
  color: ${({ theme }) => theme.palette.text.icon};
  text-transform: capitalize;
  font-weight: 500;

  &.${tabClasses.root} {
    color: ${({ theme }) => theme.palette.secondary.main};
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: 500;
  }

  &.${tabClasses.selected} {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  transition: 0.1s ease-in 150ms;
`

const StyledTabs = styled(Tabs)`
  overflow: visible;
  display: flex;

  @media (max-width: 530px) {
    width: 100%;
  }
  & .${tabsClasses.flexContainer} {
    display: flex;
    gap: 20px;
  }

  & .${tabsClasses.scroller} {
    overflow: visible;
  }

  & .${tabsClasses.indicator} {
    background: ${({ theme }) => theme.palette.primary.main};
    height: 3px;
    border-radius: 2px;
    z-index: 1;
    font-weight: 500;
  }
`

export default CommentListView
