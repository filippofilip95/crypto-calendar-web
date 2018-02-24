import { compose } from 'recompose'
import { compose as apolloCompose, graphql } from 'react-apollo'

// gql
import { allEvents } from '../gql/queries'

// components
import EventsList from '../components/EventsList'

const withData = apolloCompose(
  graphql(allEvents, {
    options: () => ({
      variables: {
        first: 100,
      },
    }),
    props: ({ data: { loading, allEvents } }) => !loading && { allEvents },
  }),
)

export default compose(withData)(EventsList)
