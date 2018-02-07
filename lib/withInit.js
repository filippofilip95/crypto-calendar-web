import { compose } from 'recompose'

import withApollo from '../lib/withApollo'
import { initStore } from '../lib/store'
import withRedux from 'next-redux-wrapper'
import withRoot from '../lib/withRoot'

export default compose(withRedux(initStore), withApollo, withRoot)
