import { DateTimePicker } from 'material-ui-pickers'

const DatePickerField = props => {
  const { meta: { error, touched }, helperText, input, ...rest } = props
  const isError = touched && !!error
  return (
    <DateTimePicker
      {...rest}
      value={input.value || null}
      onChange={input.onChange}
      error={isError}
      helperText={(isError && error) || helperText}
      onClose={e => input.onBlur(e)}
    />
  )
}

export default DatePickerField
