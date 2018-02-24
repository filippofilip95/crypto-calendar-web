import withInit from '../lib/withInit'

// components
import Layout from '../hoc/LayoutHoc'
import EventsList from '../hoc/EventsListHoc'

export default withInit(() =>
  <Layout>
    <EventsList />
  </Layout>,
)
