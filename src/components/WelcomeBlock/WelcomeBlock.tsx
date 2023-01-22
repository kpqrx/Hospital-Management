import {
  StyledAvatar,
  StyledContainer,
  StyledControlPanel,
  StyledGreetings,
  StyledName,
} from './WelcomeBlock.styled'
import avatarSrc from '@/assets/avatar.png'

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
        <button>xd</button>
        <button>xd</button>
      </StyledControlPanel>
    </StyledContainer>
  )
}

export default WelcomeBlock
