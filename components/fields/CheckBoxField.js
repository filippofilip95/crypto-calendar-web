import { FormControlLabel } from 'material-ui/Form'

import { Checkbox } from 'redux-form-material-ui'

const CheckboxField = ({ label, ...rest }) => (
  <FormControlLabel control={<Checkbox {...rest} />} label={label} />
)

export default CheckboxField
