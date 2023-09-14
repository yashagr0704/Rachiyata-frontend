import axios from 'axios'

const URL = 'https://novel-jsonserver.vercel.app/landing_banner_page_section'
const URL1 = 'https://novel-jsonserver.vercel.app/landing_banner_page_section1'

export const fetchBannerSectionImg = async () => {
  const res = await axios.get(URL)

  return res.data
}

export const fetchBannerSectionImg1 = async () => {
  const res = await axios.get(URL1)

  return res.data
}
