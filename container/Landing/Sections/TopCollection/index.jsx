import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Typography, useMediaQuery } from '@mui/material'

import { useTopCollection } from './api/topCollection.hook'
import ContentListSection from './components/ContentListSection'
import CarouselList from './components/CarouselList'
import { FormProvider, useForm } from 'react-hook-form'
import SelectSelectedTime from './components/SelectSelectedTime'
import moment from 'moment/moment'
import { useTopCollectionList } from 'Container/Landing/api/landing.hooks'

const collectionTimeList = [
  {
    label: 'Last week',
    value: moment().subtract(7, 'days').format('YYYY-MM-DD'),
  },
  {
    label: 'Last month',
    value: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  },
  {
    label: 'Last year',
    value: moment().subtract(365, 'days').format('YYYY-MM-DD'),
  },
]

const TopCollection = () => {
  const isTabletXSM = useMediaQuery('(min-width:900px)')
  const methods = useForm({
    defaultValues: {
      selectedTime: collectionTimeList[0].value,
    },
  })

  const selectedTime = methods.watch('selectedTime')

  const { Obj, isLoading, refetch } = useTopCollectionList({
    startDate: selectedTime,
    endDate: moment().subtract(1, 'days').format('YYYY-MM-DD'),
  })

  const List = [
    <ContentListSection key={1} contentName="Novel" contentList={Obj?.novels} isLoading={isLoading} />,
    <ContentListSection key={2} contentName="Poems" contentList={Obj?.poems} isLoading={isLoading} />,
    // <ContentListSection key={3} contentName="Shorts" contentList={Obj?.shorts} />,
  ]

  useEffect(() => {
    refetch()
  }, [selectedTime, refetch])

  return (
    <Root>
      <FormProvider {...methods}>
        <Main>
          <Heading>
            Top collection over
            <SelectSelectedTime name="selectedTime" menuList={collectionTimeList} />
          </Heading>
          {isTabletXSM ? (
            <CollectionList>
              <ContentListSection contentName="Novel" contentList={Obj?.novels} isLoading={isLoading} />
              <ContentListSection contentName="Poems" contentList={Obj?.poems} isLoading={isLoading} />
              {/* <ContentListSection contentName="Shorts" contentList={Obj?.shorts} /> */}
            </CollectionList>
          ) : (
            <CarouselList List={List} />
          )}
        </Main>
      </FormProvider>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  padding-inline: var(--main-side-spacing);
  padding-block: 40px;
  gap: 10px;
  overflow: hidden;
`

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  @media (max-width: 350px) {
    font-size: 25px;
  }
  color: ${({ theme }) => theme.palette.secondary.main};
`

const CollectionList = styled.div`
  width: 100%;
  height: calc(100% - 44px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export default TopCollection
