import { formValueSelector } from 'redux-form'

const createEventFormSelector = formValueSelector('createEventForm')

export const minEndDateSelector = state =>
  createEventFormSelector(state, 'startDate')

export const maxStartDateSelector = state => {
  const { endDate, isAllDay, isUnkownEndDate } = createEventFormSelector(
    state,
    'endDate',
    'isAllDay',
    'isUnkownEndDate'
  )
  if (isUnkownEndDate || isAllDay) {
    return undefined
  } else {
    return endDate
  }
}

export const visibleEndDateFieldSelector = state => {
  const { isAllDay, isUnkownEndDate } = createEventFormSelector(
    state,
    'isAllDay',
    'isUnkownEndDate'
  )
  return !(isUnkownEndDate || isAllDay)
}
