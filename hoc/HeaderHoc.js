import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'

// components
import Header from '../components/Layout/Header'

// Actions
import AppActions from '../store/appReducer'

const mapDispatchToProps = {
  ...AppActions
}

const withComponentHandlers = withHandlers({
  handleToggleDrawer: props => () => {
    props.onToggleDrawer()
  }
})

export default compose(
  connect(null, mapDispatchToProps),
  withComponentHandlers
)(Header)
