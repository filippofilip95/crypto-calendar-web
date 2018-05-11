import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'

// components
import Drawer from '../components/Layout/Drawer'

// Actions
import AppActions from '../store/appReducer'

const mapStateToProps = state => ({
  drawerVisible: state.appReducer.drawerVisible
})

const mapDispatchToProps = {
  ...AppActions
}

const withActiveRoute = withProps(({ router: { pathname } }) => ({
  activeRoute: pathname
}))

export default compose(
  withRouter,
  withActiveRoute,
  connect(mapStateToProps, mapDispatchToProps)
)(Drawer)
