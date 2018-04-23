import { compose } from 'recompose'

import withRedux from 'next-redux-wrapper'
import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

import { initStore } from '../lib/store'
import withMaterial from '../lib/withMaterial'

const apolloCofing = {
  link: new HttpLink({
    uri: process.env.GRAPHQL_URL, // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
}

export default compose(
  withMaterial,
  withRedux(initStore),
  withData(apolloCofing)
)
