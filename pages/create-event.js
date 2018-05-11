import withRoot from '../lib/withRoot'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'

// containers
import Layout from '../hoc/LayoutHoc'
import CreateEventForm from '../hoc/forms/CreateEventFormHoc'

// components
import { SnackBarProvider } from '../components/SnackBar'

export default withRoot(() => (
  <Layout>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <SnackBarProvider>
        <CreateEventForm />
      </SnackBarProvider>
    </MuiPickersUtilsProvider>
  </Layout>
))
