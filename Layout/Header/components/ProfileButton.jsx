import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { useLogoutUserAPI } from 'Container/Auth/api/auth.hook'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/global/user.slice'

const settings = ['Profile', 'Logout']

const ProfileButton = () => {
  const { data } = useSelector(selectUser)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { handleLogoutUser } = useLogoutUserAPI()
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Your Profile">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={data?.full_name}
            src={data?.profile_pic}
            sx={{ background: theme => theme.palette.primary.main, fontWeight: 600 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        <Link href={`/profile/1`}>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
        </Link>

        <MenuItem onClick={handleCloseUserMenu}>
          <Typography
            onClick={() => {
              handleLogoutUser()
            }}
            textAlign="center">
            Logout
          </Typography>
        </MenuItem>
        {/* {settings.map(setting => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))} */}
      </Menu>
    </Box>
  )
}

const Root = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
`

export default ProfileButton
