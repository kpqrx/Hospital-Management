import {
  StyledAvatar,
  StyledContainer,
  StyledControlPanel,
  StyledGreetings,
  StyledName,
} from './WelcomeBlock.styled'
import avatarSrc from '@/assets/avatar.png'
import IconButton from '../IconButton/IconButton'

function WelcomeBlock() {
  return (
    <StyledContainer>
      <StyledAvatar
        src={avatarSrc}
        alt={'Female doctor portrait'}
      />
      <StyledGreetings>
        Dzień dobry,&nbsp;
        <StyledName>Anno!</StyledName>
      </StyledGreetings>
      <StyledControlPanel>
        <IconButton
          icon="Bell"
          label="Powiadomienia"
          hasBadge
        />
        <IconButton
          icon="Cog"
          label="Ustawienia"
        />
      </StyledControlPanel>
    </StyledContainer>
  )
}

export default WelcomeBlock
