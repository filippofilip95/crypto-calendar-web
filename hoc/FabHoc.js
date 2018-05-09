import { compose, branch, renderComponent, renderNothing } from 'recompose'

import { connect } from 'react-redux'
import { withRouter } from 'next/router'

// components
import Fab from '../components/Layout/Fab'

const showOnlyOnRoot = branch(
  ({ router: { pathname } }) => pathname != '/',
  renderComponent(renderNothing())
)

export default compose(withRouter, showOnlyOnRoot)(Fab)
