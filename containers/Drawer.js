import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//ui
import DrawerUi from '../components/Drawer'

// Actions
import AppActions from '../store/appReducer'

class Drawer extends React.PureComponent {
  handleCloseDrawer = () => {
    this.props.onCloseDrawer()
  }

  render() {
    return (
      <DrawerUi
        drawerVisible={this.props.drawerVisible}
        handleCloseDrawer={this.handleCloseDrawer}
      />
    )
  }
}

Drawer.propTypes = {
  onCloseDrawer: PropTypes.func.isRequired,
  drawerVisible: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  drawerVisible: state.appReducer.drawerVisible,
})

const mapDispatchToProps = {
  ...AppActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
