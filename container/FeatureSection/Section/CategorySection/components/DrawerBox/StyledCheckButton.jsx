import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'

const StyledCheckButton = ({ contentType, category }) => {
  const { pathname, query } = useRouter()
  return (
    <Link
      href={`/${pathname}?content_type=${contentType}&category=${category.id}${
        query.sort_by ? `&sort_by=${query.sort_by}` : ''
      }`}>
      <a>
        <Root
          startIcon={query.category == category?.id ? <CheckBoxRoundedIcon /> : <CheckBoxOutlineBlankRoundedIcon />}
          className={query.category === String(category.id) && query.content_type === contentType ? 'selected' : ''}>
          {category.category_name}
        </Root>
      </a>
    </Link>
  )
}

const Root = styled(Button)`
  font-weight: 500;
  font-size: 1rem;
  padding: 5px 13px;
  color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px;
  transition: 0.35s ease-in-out;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  width: 120px;
  justify-content: start;
  width: 100%;

  &.selected {
    background: ${({ theme }) => theme.palette.primary.main}1a;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main}1a;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  .MuiButton-startIcon {
    margin-right: 4x;
    margin-left: -4px;
  }
  .MuiButton-endIcon {
    margin-right: -4px;
    margin-left: 7px;
  }
  &.selected {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export default StyledCheckButton
