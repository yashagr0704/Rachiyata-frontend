import axios from 'axios'

const URL = 'https://novel-jsonserver.vercel.app/rankingbook'

export const fetchRankingSection = async () => {
  const res = await axios.get(URL)

  return res.data
}
