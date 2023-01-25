import { useContext } from 'react'
import { ShiftsContext } from '@/contexts/ShiftsContext'
import WidgetContainer from '../WidgetContainer/WidgetContainer'
import Icon from '../Icon/Icon'
import {
  StyledItem,
  StyledItemIcon,
} from '../RecentSalaryWidget/RecentSalaryWidget.styled'
import {
  StyledItemDate,
  StyledItemLabel,
  StyledItemsContainer,
} from './ShiftsList.styled'

function ShiftsList() {
  const {
    //@ts-expect-error TODO: fix everything, it's all superglued spaghetti 😭
    formData: { shifts },
  } = useContext(ShiftsContext)

  return shifts.length !== 0 ? (
    <WidgetContainer label="Zapisane dyżury">
      <StyledItemsContainer>
        {/* @ts-expect-error TODO: oh God please fix it, I feel so guilty using that much ts-expect-errors */}
        {shifts.map((shift, index) => (
          <StyledItem key={index}>
            <StyledItemIcon
              name="Bookmark"
              color="black"
              size={24}
            />
            <StyledItemLabel>{shift.shiftKind}</StyledItemLabel>
            <StyledItemDate>
              {shift.shiftDate}
              <br />
              {shift.shiftStartTime} - {shift.shiftEndTime}
            </StyledItemDate>
            <Icon
              name="ChevronRight"
              color="gray"
              size={24}
            />
          </StyledItem>
        ))}
      </StyledItemsContainer>
    </WidgetContainer>
  ) : (
    <></>
  )
}

export default ShiftsList
