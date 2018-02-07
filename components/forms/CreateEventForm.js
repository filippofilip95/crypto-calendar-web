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

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  button: {
    marginTop: theme.spacing.unit * 3,
  },
})

const CreateEventForm = props => {
  const { classes, handleSubmit } = props
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
        />
        <Field
          fullWidth
          required
          name="eventCategory"
          label="Category"
          component={SelectField}
        >
          <MenuItem value="release" key="release">
            Release
          </MenuItem>
          <MenuItem value="rebranding" key="rebranding">
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
          margin="normal"
          name="description"
          label="Description"
          required
          multiline
          component={TextField}
        />
        <Field
          fullWidth
          name="source"
          label="Source"
          helperText="Link"
          multiline
          component={TextField}
          margin="normal"
        />
        <Field
          fullWidth
          name="email"
          label="Email"
          required
          component={TextField}
          margin="normal"
        />
        <Field
          fullWidth
          name="imageProof"
          label="Proof"
          buttonTitle="Select Image"
          buttonProps={{
            variant: 'raised',
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
  handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(CreateEventForm)
