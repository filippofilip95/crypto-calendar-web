import { InputLabel } from 'material-ui/Input'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

// utils
import { transformImageToObject } from '../../lib/utils'

import { withStyles } from 'material-ui/styles/index'

const styles = theme => ({
  imageField: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
  buttonContainer: {
    paddingTop: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
  },
  imageName: {
    marginLeft: theme.spacing.unit * 2,
  },
  fileInput: {
    display: 'none',
  },
})

const ImageField = ({
  classes,
  required,
  label,
  buttonProps,
  buttonTitle,
  input,
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
      const image = await transformImageToObject(files[0])
      input.onChange(image)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={classes.imageField}>
      <InputLabel required={required}>
        {label}
      </InputLabel>
      <div className={classes.buttonContainer}>
        <Button {...buttonProps} onClick={handlePickImage}>
          {buttonTitle}
        </Button>
        <Typography type="body1" color="inherit" className={classes.imageName}>
          {input.value && input.value.name}
        </Typography>
      </div>
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
