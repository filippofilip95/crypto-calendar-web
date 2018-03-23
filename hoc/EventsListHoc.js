import { compose, branch, renderComponent, renderNothing } from 'recompose'
import { compose as apolloCompose, graphql } from 'react-apollo'

// gql
import { allEvents } from '../gql/queries'

// components
import EventsList from '../components/EventsList'
import Loading from '../components/Loading'

const withData = apolloCompose(
  graphql(allEvents, {
    options: () => ({
      variables: {
        first: 100
      }
    }),
    props: ({ data: { loading, allEvents } }) => ({
      allEvents,
      loading
    })
  })
)

const withLoading = branch(props => props.loading, renderComponent(Loading))

export default compose(withData, withLoading)(EventsList)
