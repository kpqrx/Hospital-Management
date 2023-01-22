import { StyledContainer, StyledLink } from './Navigation.styled'
import { NavigationProps } from './Navigation.types'

function Navigation(props: NavigationProps) {
  const { items = [] } = props

  return (
    <StyledContainer>
      {items.map(({ icon: Icon, label, href }, index) => (
        <li key={index}>
          <StyledLink href={href}>
            <Icon />
            {label}
          </StyledLink>
        </li>
      ))}
    </StyledContainer>
  )
}

export default Navigation
