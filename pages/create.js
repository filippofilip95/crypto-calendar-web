import withRoot from '../lib/withRoot'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'

// container
import Layout from '../hoc/LayoutHoc'
import CreateEventFrom from '../hoc/forms/CreateEventFormHoc'

export default withRoot(() => (
  <Layout>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CreateEventFrom />
    </MuiPickersUtilsProvider>
  </Layout>
))
