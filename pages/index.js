import { useSelector } from 'react-redux'
import LandingPageAfterLogin from 'Container/Landing/pages/LandingAfterLogin.page'
import LandingPageWithoutLogin from 'Container/Landing/pages/LandingWithoutLogin.page'

export default function Home() {
  const { isLoggedIn } = useSelector(state => state.user)

  return <>{isLoggedIn ? <LandingPageAfterLogin /> : <LandingPageWithoutLogin />} </>
}
