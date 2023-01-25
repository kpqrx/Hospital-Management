import { useContext, useState } from 'react'
import type { ChangeEventHandler } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { StyledContainer, StyledHeading } from './ShiftsForm.styled'
import { ShiftsContext } from '@/contexts/ShiftsContext'

function ShiftsForm() {
  const [shiftPlace, setShiftPlace] = useState('')
  const [shiftKind, setShiftKind] = useState('')
  const [shiftHeadDoctor, setShiftHeadDoctor] = useState('')
  const [shiftStartTime, setShiftStartTime] = useState('')
  const [shiftEndTime, setShiftEndTime] = useState('')
  const [shiftDate, setShiftDate] = useState('')

  const handleShiftPlaceInputChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setShiftPlace(e.target.value)
  const handleShiftKindInputChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setShiftKind(e.target.value)
  const handleShiftHeadDoctorInputChange: ChangeEventHandler<
    HTMLInputElement
  > = (e) => setShiftHeadDoctor(e.target.value)
  const handleShiftStartTimeInputChange: ChangeEventHandler<
    HTMLInputElement
  > = (e) => setShiftStartTime(e.target.value)
  const handleShiftEndTimeInputChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setShiftEndTime(e.target.value)
  const handleShiftDateInputChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => setShiftDate(e.target.value)

  //@ts-expect-error adsf
  const { dispatch } = useContext(ShiftsContext)

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_SHIFT',
      payload: {
        shiftPlace,
        shiftKind,
        shiftHeadDoctor,
        shiftStartTime,
        shiftEndTime,
        shiftDate,
      },
    })
  }

  return (
    <StyledContainer onSubmit={handleSubmit}>
      <StyledHeading>Dodaj dyżur</StyledHeading>
      <Input
        value={shiftKind}
        onChange={handleShiftKindInputChange}
        label="Rodzaj dyżuru"
        id="shift-kind"
        name="shift-kind"
        required
      />
      <Input
        value={shiftPlace}
        onChange={handleShiftPlaceInputChange}
        label="Miejsce dyżuru"
        id="shift-place"
        name="shift-place"
        required
      />
      <Input
        value={shiftHeadDoctor}
        onChange={handleShiftHeadDoctorInputChange}
        label="Ordynator"
        id="shift-head-doctor"
        name="shift-head-doctor"
        required
      />
      <Input
        value={shiftStartTime}
        onChange={handleShiftStartTimeInputChange}
        label="Początek dyżuru"
        id="shift-start-time"
        name="shift-start-time"
        type="time"
        required
      />
      <Input
        value={shiftEndTime}
        onChange={handleShiftEndTimeInputChange}
        label="Koniec dyżuru"
        id="shift-end-time"
        name="shift-end-time"
        type="time"
        required
      />
      <Input
        value={shiftDate}
        onChange={handleShiftDateInputChange}
        label="Data dyżuru"
        id="shift-date"
        name="shift-date"
        type="date"
        required
      />
      <Button variant="tertiary">Dodaj</Button>
    </StyledContainer>
  )
}

export default ShiftsForm
