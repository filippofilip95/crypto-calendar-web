import { compose } from 'recompose'
import { connect } from 'react-redux'

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

export default compose(connect(mapStateToProps, mapDispatchToProps))(Drawer)
