import { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { Select } from 'redux-form-material-ui'
import { withStyles } from 'material-ui/styles/index'

const styles = theme => ({
  selectField: {
    marginTop: theme.spacing.unit,
    display: 'flex',
    flex: 1
  }
})

const SelectField = props => {
  const { meta: { error, touched }, classes, required, label, ...rest } = props
  const isError = touched && !!error

  return (
    <FormControl className={classes.selectField}>
      <InputLabel required={required} error={isError}>
        {label}
      </InputLabel>
      <Select {...rest} error={isError} />
      {isError && <FormHelperText error={isError}>{error}</FormHelperText>}
    </FormControl>
  )
}

export default withStyles(styles)(SelectField)
