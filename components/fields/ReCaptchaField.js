import ReCAPTCHA from 'react-google-recaptcha'

// ui
import { FormControl, FormHelperText } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { withStyles } from 'material-ui/styles/index'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  captchaLabel: {
    marginBottom: theme.spacing.unit
  }
})

const ReCaptchaField = props => {
  const {
    meta: { error, touched },
    classes,
    required,
    label,
    helperText,
    input,
    ...rest
  } = props
  const isError = touched && !!error

  return (
    <div className={classes.root}>
      <div className={classes.captchaLabel}>
        <InputLabel required={required} error={isError}>
          {label}
        </InputLabel>
      </div>
      <ReCAPTCHA
        size="normal"
        sitekey={process.env.RECAPTCHA_SITE_KEY}
        onChange={value => input.onChange(value)}
      />
      {(isError || helperText) && (
        <FormHelperText error={isError}>
          {(isError && error) || helperText}
        </FormHelperText>
      )}
    </div>
  )
}

export default withStyles(styles)(ReCaptchaField)
