import {
  compose,
  branch,
  renderComponent,
  renderNothing,
  withHandlers
} from 'recompose'

import { connect } from 'react-redux'
import Router, { withRouter } from 'next/router'

// components
import Fab from '../components/Layout/Fab'

const withMethods = withHandlers({
  navigateToCreateEventPage: () => () => {
    Router.push('/create')
  }
})

const showOnlyOnRoot = branch(
  ({ router: { pathname } }) => pathname != '/',
  renderComponent(renderNothing())
)

export default compose(withRouter, showOnlyOnRoot, withMethods)(Fab)
