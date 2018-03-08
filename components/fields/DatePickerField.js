import React from 'react'
import { format } from 'date-fns'
import { withStyles } from 'material-ui/styles/index'
import { withTheme } from 'material-ui/styles'

// ui
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { Select } from 'redux-form-material-ui'
import InfiniteCalendar from 'react-infinite-calendar'
import Modal from 'material-ui/Modal'

// contants
import { TODAY } from '../../lib/constants'

const styles = theme => ({
  selectField: {
    marginTop: theme.spacing.unit,
    display: 'flex',
    flex: 1
  },
  paper: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class DatePickerField extends React.PureComponent {
  state = {
    pickerVisible: false
  }

  handlePickerClose = () => {
    this.setState({
      pickerVisible: false
    })
  }

  handleOnClick = () => {
    this.setState({
      pickerVisible: true
    })
  }

  handlePickerOnSelect = date => {
    const { input } = this.props
    input.onChange(date)
    this.handlePickerClose()
  }

  render() {
    const {
      meta: { error, touched },
      theme,
      classes,
      required,
      label,
      input,
      helperText,
      ...rest
    } = this.props
    const date = input.value ? format(input.value, 'MM/DD/YYYY') : ''

    const isError = touched && !!error

    return (
      <FormControl className={classes.selectField}>
        <InputLabel required={required} error={isError}>
          {label}
        </InputLabel>
        <Input
          fullWidth
          error={isError}
          onClick={this.handleOnClick}
          value={date}
          {...rest}
        />
        <Modal
          className={classes.paper}
          open={this.state.pickerVisible}
          onClose={this.handlePickerClose}
        >
          <InfiniteCalendar
            width={400}
            height={600}
            onSelect={this.handlePickerOnSelect}
            minDate={TODAY}
            theme={{
              headerColor: theme.palette.primary.main,
              weekdayColor: theme.palette.primary.dark,
              selectionColor: theme.palette.primary.light
            }}
            tabIndex={1}
            selected={input.value}
          />
        </Modal>
        {(isError || helperText) && (
          <FormHelperText error={isError}>
            {(isError && error) || helperText}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default withTheme()(withStyles(styles)(DatePickerField))
