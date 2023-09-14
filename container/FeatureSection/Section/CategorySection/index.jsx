import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import useCategoryApi from 'Container/FeatureSection/api/category.hook'
import { useRouter } from 'next/router'
import React, { useLayoutEffect, useState } from 'react'
import AccordionBox from './components/AccordionBox'
import DrawerBox from './components/DrawerBox'

const getSectionIndexByName = sectionName => {
  switch (sectionName.toLocaleLowerCase()) {
    case 'novel':
      return 0
    case 'poem':
      return 1
    case 'short':
      return 2
    default:
      return ''
  }
}

const CategorySection = () => {
  const is800x = useMediaQuery('(max-width: 800px)')
  const { query } = useRouter()
  const { content_type } = query
  const { data, isLoading } = useCategoryApi()
  const [openedIdx, setOpenedIdx] = useState('')

  useLayoutEffect(() => {
    setOpenedIdx(getSectionIndexByName(String(content_type)))
  }, [content_type])

  const List = [
    {
      contentType: 'Novel',
      categoryList: data?.data?.data,
    },
    {
      contentType: 'Poem',
      categoryList: data?.data?.data,
    },
    // {
    //   contentType: 'Short',
    //   categoryList: categoryList,
    // },
  ]

  return (
    <Root>
      {is800x ? (
        <DrawerBox List={List} />
      ) : (
        List.map((item, idx) => (
          <AccordionBox key={idx} idx={idx} isOpened={openedIdx === idx} setOpenedIdx={setOpenedIdx} item={item} />
        ))
      )}
    </Root>
  )
}

const categoryList = [
  {
    id: 1,
    category_name: 'All',
  },
  {
    id: 2,
    category_name: 'Eastern',
  },
  {
    id: 3,
    category_name: 'Fantasy',
  },
  {
    id: 4,
    category_name: 'Horror',
  },
  {
    id: 5,
    category_name: 'Action',
  },
  {
    id: 6,
    category_name: 'AGC',
  },
  {
    id: 7,
    category_name: 'Urban',
  },
  {
    id: 8,
    category_name: 'Games',
  },
  {
    id: 9,
    category_name: 'Sci-fi',
  },
  {
    id: 10,
    category_name: 'Sports',
  },
  {
    id: 11,
    category_name: 'Realistic',
  },
  {
    id: 12,
    category_name: 'War',
  },
  {
    id: 13,
    category_name: 'History',
  },
]

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`

export default CategorySection
