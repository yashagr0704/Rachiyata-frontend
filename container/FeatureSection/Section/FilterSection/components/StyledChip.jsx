import styled from '@emotion/styled'
import { Chip } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const StyledChip = ({ item }) => {
  const { query, pathname } = useRouter()
  return (
    <Link href={`/${pathname}?content_type=${query.content_type}&category=${query.category}&sort_by=${item.label}`}>
      <a>
        <Root
          className={query?.sort_by?.toLowerCase() === item.label.toLowerCase() ? 'active' : ''}
          label={item.label}
          onClick={() => {}}
        />
      </a>
    </Link>
  )
}

const Root = styled(Chip)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  background: ${({ theme }) => theme.palette.primary.main}11;
  transition: 0.25s ease-in;
  &.active {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`

export default StyledChip
