import Icon from '../Icon/Icon'
import { StyledContainer, StyledNavigationItem } from './Navigation.styled'
import type { NavigationProps } from './Navigation.types'

function Navigation(props: NavigationProps) {
  const { items = [] } = props

  return (
    <StyledContainer>
      {items.map(({ icon, label, href }, index) => (
        <li key={index}>
          <StyledNavigationItem href={href}>
            <Icon name={icon} />
            {label}
          </StyledNavigationItem>
        </li>
      ))}
    </StyledContainer>
  )
}

export default Navigation
