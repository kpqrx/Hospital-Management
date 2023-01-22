import Logo from '@/components/Logo/Logo'
import { StyledContainer } from './Sidebar.styled'
import { HiChartPie, HiClock, HiCalendar, HiCash, HiSun } from 'react-icons/hi'
import WelcomeBlock from '../WelcomeBlock/WelcomeBlock'
import Navigation from '../Navigation/Navigation'
import type { NavigationItemType } from '../Navigation/Navigation.types'

const navigationItems: NavigationItemType[] = [
  {
    icon: HiChartPie,
    label: 'Panel pracownika',
    href: '#',
  },
  {
    icon: HiClock,
    label: 'Czas pracy',
    href: '#',
  },
  {
    icon: HiCalendar,
    label: 'Dyzury',
    href: '#',
  },
  {
    icon: HiCash,
    label: 'Wynagrodzenia',
    href: '#',
  },
  {
    icon: HiSun,
    label: 'Urlopy',
    href: '#',
  },
]

function Sidebar() {
  return (
    <StyledContainer>
      <Logo />
      <WelcomeBlock />
      <Navigation items={navigationItems} />
    </StyledContainer>
  )
}

export default Sidebar
