import Button from '../Button/Button'
import WidgetContainer from '../WidgetContainer/WidgetContainer'
import {
  StyledItem,
  StyledItemAmount,
  StyledItemIcon,
  StyledItemPeriod,
  StyledItemsContainer,
} from './RecentSalaryWidget.styled'

const salaryItems = ['marzec', 'kwiecień', 'maj'].map((month) => ({
  amount: '4200',
  period: `${month} 2023`,
}))

function RecentSalaryWidget() {
  return (
    <WidgetContainer
      label="Ostatnie wynagrodzenia"
      renderHeadingAction={() => (
        <Button variant="secondary">Zobacz więcej</Button>
      )}
    >
      <StyledItemsContainer>
        {salaryItems.map(({ amount, period }, index) => (
          <StyledItem key={index}>
            <StyledItemIcon
              name="Cash"
              color="black"
              size={24}
            />
            <StyledItemAmount>{amount} PLN</StyledItemAmount>
            <StyledItemPeriod>{period}</StyledItemPeriod>
            <StyledItemIcon
              name="ChevronRight"
              color="gray"
              size={24}
            />
          </StyledItem>
        ))}
      </StyledItemsContainer>
    </WidgetContainer>
  )
}

export default RecentSalaryWidget
