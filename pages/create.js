import withInit from '../lib/withInit'
import 'react-infinite-calendar/styles.css'

// container
import Layout from '../hoc/LayoutHoc'
import CreateEventFrom from '../hoc/forms/CreateEventFormHoc'

export default withInit(() => (
  <Layout>
    <CreateEventFrom />
  </Layout>
))
