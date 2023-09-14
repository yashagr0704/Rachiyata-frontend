import Link from 'next/link'
import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'
import { useLogoutUserAPI } from 'Container/Auth/api/auth.hook'
import { Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/global/user.slice'

const ProfileButton = () => {
  const user = useSelector(selectUser)

  return (
    <Link href={`/profile`}>
      <Root sx={{ flexGrow: 0 }}>
        <Avatar variant="rounded" alt={user.data.username} src={user?.data?.profile_pic} />
        <Username>{user.data.username}</Username>
      </Root>
    </Link>
  )
}

const Root = styled(Button)`
  margin-right: 10px;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-top: 5px;
  width: calc(100% - 25px);
  justify-content: flex-start;
  border-radius: 13px;
  background: ${({ theme }) => theme.palette.primary.main}1f;
  backdrop-filter: blur(40px);
`

const Username = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: 600;
  font-style: 28px;
  margin-left: 10px;
`

export default ProfileButton
