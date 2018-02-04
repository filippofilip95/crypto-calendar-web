import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'

// components
import Header from '../components/Header'

// Actions
import AppActions from '../store/appReducer'

const mapDispatchToProps = {
  ...AppActions,
}

const withComponentHandlers = withHandlers({
  handleOpenDrawer: props => () => {
    props.onOpenDrawer()
  },
})

export default compose(
  connect(null, mapDispatchToProps),
  withComponentHandlers,
)(Header)
