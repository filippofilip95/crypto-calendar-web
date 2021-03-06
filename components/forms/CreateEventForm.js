import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { withStyles } from 'material-ui/styles'
import { url, required, email, length, file } from 'redux-form-validators'
import ReCAPTCHA from 'react-google-recaptcha'

// ui
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import { MenuItem } from 'material-ui/Menu'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { LinearProgress } from 'material-ui/Progress'

// fields
import TextField from '../fields/TextField'
import SelectField from '../fields/SelectField'
import ImageField from '../fields/ImageField'
import AutoCompleteField from '../fields/AutoCompleteField'
import DatePickerField from '../fields/DatePickerField'
import CheckBoxField from '../fields/CheckBoxField'
import ReCaptchaField from '../fields/ReCaptchaField'

// constants
import { EVENT_CATEGORIES } from '../../lib/constants'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  }),
  button: {
    marginTop: theme.spacing.unit * 3
  },
  linearProgress: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
})

const CreateEventForm = props => {
  const {
    classes,
    handleSubmit,
    allCryptoCoins = [],
    setCoinsFilter,
    loading,
    mutationLoading,
    maxStartDate,
    minEndDate,
    visibleEndDateField,
    submitIfHuman
  } = props

  return (
    <Paper className={classes.root} elevation={4}>
      {mutationLoading && <LinearProgress className={classes.linearProgress} />}
      <Typography variant="headline" color="inherit">
        Add Crypto Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Field
              fullWidth
              margin="normal"
              name="title"
              label="Title"
              required
              component={TextField}
              validate={[required(), length({ minimum: 10 })]}
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
              validate={[required()]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              name="category"
              label="Category"
              component={SelectField}
              validate={[required()]}
            >
              {EVENT_CATEGORIES.map(({ name, value }) => (
                <MenuItem value={value} key={value}>
                  {name}
                </MenuItem>
              ))}
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
              validate={[required(), length({ minimum: 10 })]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              fullWidth
              name="startDate"
              label="Starts On"
              required
              component={DatePickerField}
              validate={[required()]}
              helperText="Enter date when event starts"
              ampm={false}
              disablePast
              maxDate={maxStartDate}
            />
            <Field name="isAllDay" label="All day" component={CheckBoxField} />
            <Field
              name="isUnkownEndDate"
              label="Unknown end date"
              component={CheckBoxField}
            />
            <Field
              name="isEstimatedTime"
              label="Estimated time"
              component={CheckBoxField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {visibleEndDateField && (
              <Field
                fullWidth
                name="endDate"
                label="Ends On"
                required
                component={DatePickerField}
                validate={[required()]}
                helperText="Enter date when event ends"
                ampm={false}
                disablePast
                minDate={minEndDate}
              />
            )}
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
              validate={[required(), url({ protocols: ['http', 'https'] })]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              fullWidth
              name="email"
              label="Email"
              component={TextField}
              margin="normal"
              validate={[email({ allowBlank: true })]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
              helperText="Maximum image size is 1MB"
              validate={[required(), file({ maxSize: '1 MB' })]}
            />
          </Grid>
          <Grid item xs={12}>
            <ReCAPTCHA
              size="invisible"
              sitekey={process.env.RECAPTCHA_SITE_KEY}
              onChange={submitIfHuman}
            />
            <Button
              variant="raised"
              color="primary"
              disabled={mutationLoading}
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
