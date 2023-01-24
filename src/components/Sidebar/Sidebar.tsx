import Logo from '@/components/Logo/Logo'
import { StyledContainer } from './Sidebar.styled'
import WelcomeBlock from '../WelcomeBlock/WelcomeBlock'
import Navigation from '../Navigation/Navigation'
import type { NavigationItemType } from '../Navigation/Navigation.types'
import Button from '../Button/Button'

const navigationItems: NavigationItemType[] = [
  {
    icon: 'ChartPie',
    label: 'Panel pracownika',
    href: '/',
  },
  {
    icon: 'Clock',
    label: 'Czas pracy',
    href: '#',
  },
  {
    icon: 'Calendar',
    label: 'Dyzury',
    href: '/shifts',
  },
  {
    icon: 'Cash',
    label: 'Wynagrodzenia',
    href: '#',
  },
  {
    icon: 'Sun',
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
      <Button icon={{ name: 'Logout' }}>Wyloguj się</Button>
    </StyledContainer>
  )
}

export default Sidebar
