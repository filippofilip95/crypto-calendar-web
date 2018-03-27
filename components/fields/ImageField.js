// ui
import { InputLabel } from 'material-ui/Input'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { withStyles } from 'material-ui/styles/index'

const styles = theme => ({
  imageField: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  buttonContainer: {
    paddingTop: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center'
  },
  imageName: {
    marginLeft: theme.spacing.unit * 2
  },
  fileInput: {
    display: 'none'
  }
})

const getFileSize = number => {
  if (number < 1024) {
    return number + 'bytes'
  } else if (number > 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + 'KB'
  } else if (number > 1048576) {
    return (number / 1048576).toFixed(1) + 'MB'
  }
}

const ImageField = ({
  classes,
  required,
  label,
  buttonProps,
  buttonTitle,
  input,
  meta: { error, touched },
  helperText
}) => {
  let fileInput
  const handlePickImage = () => {
    if (fileInput) {
      fileInput.click()
    }
  }

  const handleImageChange = async e => {
    const { target: { files } } = e
    try {
      input.onChange(files[0])
    } catch (e) {
      console.log(e)
    }
  }

  const isError = touched && !!error

  return (
    <div className={classes.imageField}>
      <InputLabel required={required}>{label}</InputLabel>
      <div className={classes.buttonContainer}>
        <Button {...buttonProps} onClick={handlePickImage}>
          {buttonTitle}
        </Button>
        <Typography type="body1" color="inherit" className={classes.imageName}>
          {input.value &&
            `${input.value.name} (${getFileSize(input.value.size)})`}
        </Typography>
      </div>
      <FormHelperText error={isError}>
        {(isError && error) || helperText}
      </FormHelperText>
      <input
        className={classes.fileInput}
        ref={input => {
          fileInput = input
        }}
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageChange}
      />
    </div>
  )
}

export default withStyles(styles)(ImageField)
