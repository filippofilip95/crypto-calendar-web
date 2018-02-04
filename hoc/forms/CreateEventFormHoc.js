import { compose, withProps } from 'recompose'
import { reduxForm } from 'redux-form'

// components
import createEventForm from '../../components/forms/CreateEventForm'

export default compose(
  withProps({
    onSubmit: x => console.log(x),
  }),
  reduxForm({
    form: 'createEventForm',
  }),
)(createEventForm)
