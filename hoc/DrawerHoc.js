import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'

// components
import Drawer from '../components/Drawer'

// Actions
import AppActions from '../store/appReducer'

const mapStateToProps = state => ({
  drawerVisible: state.appReducer.drawerVisible,
})

const mapDispatchToProps = {
  ...AppActions,
}

const withComponentHandlers = withHandlers({
  handleCloseDrawer: props => () => {
    props.onCloseDrawer()
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withComponentHandlers,
)(Drawer)
