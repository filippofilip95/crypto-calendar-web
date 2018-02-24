import React from 'react'
import { withStyles } from 'material-ui/styles'
import Select from 'react-select'

// ui
import Typography from 'material-ui/Typography'
import Input from 'material-ui/Input'
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown'
import ArrowDropUpIcon from 'material-ui-icons/ArrowDropUp'
import ClearIcon from 'material-ui-icons/Clear'
import { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'

// styles
import styles from '../styles/AutoCompleteFieldStyles'

const Option = props => {
  const { children, isFocused, isSelected, onFocus } = props

  const handleClick = event => {
    props.onSelect(props.option, event)
  }

  return (
    <MenuItem
      onFocus={onFocus}
      selected={isFocused}
      onClick={handleClick}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {children}
    </MenuItem>
  )
}

const SelectWrapped = props =>
  <Select
    optionComponent={Option}
    noResultsText={
      <Typography>
        {'No results found'}
      </Typography>
    }
    arrowRenderer={({ isOpen }) =>
      isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
    clearRenderer={() => <ClearIcon />}
    valueComponent={({ children }) =>
      <div className="Select-value">
        {children}
      </div>}
    {...props}
  />

class AutoCompleteField extends React.PureComponent {
  state = {
    focused: false,
  }

  handleOnFocus = () => {
    this.setState({
      focused: true,
    })
  }

  handleOnBlur = () => {
    const { input } = this.props
    if (!input.value) {
      this.setState({
        focused: false,
      })
    }
    input.onBlur(input.value)
  }

  render() {
    const {
      meta: { error, touched },
      classes,
      input,
      fullWidth,
      ...rest
    } = this.props
    const isError = touched && !!error

    return (
      <FormControl fullWidth={fullWidth} className={classes.root}>
        <InputLabel
          required={rest.required}
          shrink={this.state.focused}
          error={isError}
        >
          {rest.label}
        </InputLabel>
        <Input
          fullWidth
          onChange={input.onChange}
          inputComponent={SelectWrapped}
          error={isError}
          inputProps={{
            classes,
            placeholder: rest.placeholder || null,
            onBlur: this.handleOnBlur,
            onFocus: this.handleOnFocus,
            value: input.value,
            filterOptions: options => options,
            ...rest,
          }}
        />
        {isError &&
          <FormHelperText error={isError}>
            {error}
          </FormHelperText>}
      </FormControl>
    )
  }
}

export default withStyles(styles)(AutoCompleteField)
