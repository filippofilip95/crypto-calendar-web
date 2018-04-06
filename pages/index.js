import withRoot from '../lib/withRoot'

// components
import Layout from '../hoc/LayoutHoc'
import EventsList from '../hoc/EventsListHoc'
import GalleryModal from '../hoc/GalleryModalHoc'

export default withRoot(() => (
  <Layout>
    <EventsList />
    <GalleryModal />
  </Layout>
))
