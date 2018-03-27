import withInit from '../lib/withInit'

// components
import Layout from '../hoc/LayoutHoc'
import EventsList from '../hoc/EventsListHoc'
import GalleryModal from '../hoc/GalleryModalHoc'

export default withInit(() => (
  <Layout>
    <EventsList />
    <GalleryModal />
  </Layout>
))
