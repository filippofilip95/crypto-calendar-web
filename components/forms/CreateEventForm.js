import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { withStyles } from 'material-ui/styles'

// ui
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import { MenuItem } from 'material-ui/Menu'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

// fields
import TextField from '../fields/TextField'
import SelectField from '../fields/SelectField'
import ImageField from '../fields/ImageField'
import AutoCompleteField from '../fields/AutoCompleteField'
import DatePickerField from '../fields/DatePickerField'

// validation
import { required, email, minLength } from '../fields/validation'

// constants
import { TIMES_24_MODE } from '../../lib/constants'

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
      <Typography variant="headline" color="inherit">
        Add Crypto Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <Field
              fullWidth
              margin="normal"
              name="title"
              label="Title"
              required
              component={TextField}
              validate={[required, minLength10]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
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
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="date"
              label="Date"
              required
              component={DatePickerField}
              validate={[required]}
              helperText="Enter date when event starts"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              fullWidth
              name="time"
              label="Time"
              required
              component={SelectField}
              validate={[required]}
              helperText="Set time in UTC"
            >
              {TIMES_24_MODE.map(time => (
                <MenuItem value={time} key={time} children={time} />
              ))}
            </Field>
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              fullWidth
              name="email"
              label="Email"
              required
              component={TextField}
              margin="normal"
              validate={[email]}
            />
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

CreateEventForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(CreateEventForm)
