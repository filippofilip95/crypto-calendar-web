import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { withStyles } from 'material-ui/styles'

// ui
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import { MenuItem } from 'material-ui/Menu'
import Typography from 'material-ui/Typography'

// fields
import TextField from '../fields/TextField'
import SelectField from '../fields/SelectField'
import ImageField from '../fields/ImageField'
import AutoCompleteField from '../fields/AutoCompleteField'
import DatePickerField from '../fields/DatePickerField'

// validation
import { required, email, minLength } from '../fields/validation'
const minLength10 = minLength(10)

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    flexGrow: 1,
    maxWidth: 800
  }),
  button: {
    marginTop: theme.spacing.unit * 3
  }
})

const CreateEventForm = props => {
  const { classes, handleSubmit, allCryptoCoins, setCoinsFilter } = props
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography
        variant="headline"
        color="inherit"
        className={classes.headerTitle}
      >
        Add Crypto Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Field
          fullWidth
          margin="normal"
          name="title"
          label="Title"
          required
          component={TextField}
          validate={[required, minLength10]}
        />
        <Field
          fullWidth
          required
          name="category"
          label="Category"
          component={SelectField}
          validate={[required]}
        >
          <MenuItem value="Release" key="release">
            Release
          </MenuItem>
          <MenuItem value="Rebranding" key="rebranding">
            Rebranding
          </MenuItem>
          <MenuItem value="community" key="community">
            Community Event
          </MenuItem>
          <MenuItem value="other" key="other">
            Other
          </MenuItem>
        </Field>
        <Field
          fullWidth
          label="Coin Name"
          required
          name="cryptoCoinId"
          component={AutoCompleteField}
          options={allCryptoCoins}
          valueKey="id"
          labelKey="fullName"
          simpleValue
          onInputChange={value => setCoinsFilter(value)}
          validate={[required]}
        />
        <Field
          fullWidth
          margin="normal"
          name="description"
          label="Description"
          required
          multiline
          component={TextField}
          validate={[required]}
        />
        <Field
          fullWidth
          name="source"
          label="Source"
          helperText="Link"
          multiline
          component={TextField}
          margin="normal"
          validate={[required, minLength10]}
        />
        <Field
          fullWidth
          name="date"
          label="Date"
          required
          component={DatePickerField}
          validate={[required]}
        />
        <Field
          fullWidth
          name="email"
          label="Email"
          required
          component={TextField}
          margin="normal"
          validate={[email]}
        />
        <Field
          fullWidth
          name="imageProof"
          label="Proof"
          buttonTitle="Select Image"
          buttonProps={{
            variant: 'raised'
          }}
          required
          component={ImageField}
        />
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit the Event
        </Button>
      </form>
    </Paper>
  )
}

CreateEventForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(CreateEventForm)
