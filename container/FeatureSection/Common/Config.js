import NovelImg from '../../../public/novel.svg'
import PoemImg from '../../../public/poem.png'
import ShortImg from '../../../public/shorts.svg'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'

import { FaBookReader } from 'react-icons/fa'
import { NovelIcon, PoemIcon } from './styles'

export const ExploreLinkList = [
  {
    href: '/explore?content_type=novel',
    img_url: <NovelIcon />,
    genretitle: 'Novels',
  },
  {
    href: '/explore?content_type=short',
    img_url: <PoemIcon />,
    genretitle: 'Shorts',
  },
  {
    href: '/explore?content_type=poem',
    img_url: <PoemIcon />,
    genretitle: 'Poems',
  },
]

export const RankingTextAndNestedRoute = [
  {
    text: 'Novel Ranking',
    explore: 'ranking',
    section: 'novel',
    high: '420px',
  },
  {
    text: 'Poems Ranking',
    explore: 'ranking',
    section: 'poem',
    high: '420px',
  },
  {
    text: 'Shorts Ranking',
    explore: 'ranking',
    section: 'short',
    high: '420px',
  },
]

{
  /* <Root className={router.pathname.includes(path) && 'selected'} startIcon={<Icon style={IconStyle} />}>
{label}
</Root> */
}
