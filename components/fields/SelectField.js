import { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import { Select } from 'redux-form-material-ui'
import { withStyles } from 'material-ui/styles/index'

const styles = theme => ({
  selectField: {
    marginTop: theme.spacing.unit,
    display: 'flex',
    flex: 1,
  },
})

const SelectField = ({ classes, required, label, ...rest }) =>
  <FormControl className={classes.selectField}>
    <InputLabel required={required}>
      {label}
    </InputLabel>
    <Select {...rest} />
  </FormControl>

export default withStyles(styles)(SelectField)
