import withRoot from '../lib/withRoot'
import { startOfDay } from 'date-fns'

// components
import Layout from '../hoc/LayoutHoc'
import EventsList from '../hoc/EventsListHoc'
import GalleryModal from '../hoc/GalleryModalHoc'

const queryVariables = {
  first: 100,
  orderBy: 'startDate_DESC',
  filter: {
    startDate_lte: startOfDay(new Date()),
    endDate_gte: startOfDay(new Date())
  }
}

export default withRoot(() => (
  <Layout>
    <EventsList queryVariables={queryVariables} />
    <GalleryModal />
  </Layout>
))
