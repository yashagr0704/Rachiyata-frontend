import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'

export const NavPageLinks = [
  {
    Icon: AutoStoriesOutlinedIcon,
    label: 'Explore',
    path: '/explore',
    link: '/explore?content_type=novel&category=1&sort_by=Hot',
  },
  {
    Icon: StarHalfOutlinedIcon,
    label: 'Ranking',
    path: '/ranking',
    link: '/ranking?content_type=novel&category=1',
  },
  {
    Icon: BorderColorOutlinedIcon,
    label: 'Create',
    path: '/create',
    link: '/create/dashboard/stories',
  },
  {
    Icon: BookOutlinedIcon,
    label: 'Library',
    path: '/profile',
    link: '/profile',
  },
]

// const IconSet =NavPageLinks.map((item)=>Icon)
