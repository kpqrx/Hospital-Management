import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import {
  StyledContentWrapper,
  StyledDate,
  StyledDateDay,
  StyledDetails,
  StyledDetailsItem,
  StyledTitle,
  StyledWidgetContainer,
} from './UpcomingShiftWidget.styled'

function UpcomingShiftWidget() {
  return (
    <StyledWidgetContainer
      label="Nadchodzący dyżur"
      renderHeadingAction={() => (
        <Button variant="secondary">Więcej informacji</Button>
      )}
    >
      <StyledDate>
        <StyledDateDay>25</StyledDateDay>
        czerwiec
      </StyledDate>
      <StyledContentWrapper>
        <StyledTitle>Oddział chirurgii</StyledTitle>
        <StyledDetails>
          <StyledDetailsItem>
            <Icon
              name="Clock"
              color="gray"
            />
            8:00 - 13:00
          </StyledDetailsItem>
          <StyledDetailsItem>
            <Icon
              name="UserCircle"
              color="gray"
            />
            dr Jan Brzeski
          </StyledDetailsItem>
          <StyledDetailsItem>
            <Icon
              name="Bookmark"
              color="gray"
            />
            Dyżur operacyjny
          </StyledDetailsItem>
        </StyledDetails>
      </StyledContentWrapper>
    </StyledWidgetContainer>
  )
}

export default UpcomingShiftWidget
