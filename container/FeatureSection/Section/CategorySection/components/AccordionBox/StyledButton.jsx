import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const StyledButton = ({ contentType, category }) => {
  const router = useRouter()
  return (
    <Link
      href={`${router.pathname}?content_type=${contentType}&category=${category.id}${
        router.query.sort_by ? `&sort_by=${router.query.sort_by}` : ''
      }`}>
      <a>
        <Root
          className={
            router.query.category === String(category.id) && router.query.content_type === contentType ? 'selected' : ''
          }>
          {category.category_name}
        </Root>
      </a>
    </Link>
  )
}

const Root = styled(Button)`
  font-weight: 500;
  font-size: 15px;
  padding: 5px 17px;
  border-radius: 11px;
  border: none;
  text-align: left;
  display: flex;
  min-width: fit-content;
  width: 100%;
  color: ${({ theme }) => theme.palette.secondary.main};
  background: ${({ theme }) => theme.palette.primary.main}11;

  &.selected {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main}29;
  }

  &.selected:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default StyledButton
