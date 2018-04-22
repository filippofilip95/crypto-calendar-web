import { compose, branch, renderComponent, renderNothing } from 'recompose'
import { compose as apolloCompose, graphql } from 'react-apollo'
import { startOfDay } from 'date-fns'

// gql
import { allEvents } from '../gql/queries'

// components
import EventsList from '../components/EventsList'
import Loading from '../components/Loading'
import NoEventsToShow from '../components/NoEventsToShow'

const withData = apolloCompose(
  graphql(allEvents, {
    options: () => ({
      variables: {
        first: 100,
        orderBy: 'startDate_ASC',
        filter: {
          startDate_gte: startOfDay(new Date())
        }
      }
    }),
    props: ({ data: { loading, allEvents } }) => ({
      allEvents,
      loading
    })
  })
)

const withLoading = branch(props => props.loading, renderComponent(Loading))
const withNoEvents = branch(
  props => props.allEvents && props.allEvents.length == 0,
  renderComponent(NoEventsToShow)
)

export default compose(withData, withLoading, withNoEvents)(EventsList)
