import React from 'react'
import PropTypes from 'prop-types'

// ui
import MaterialDrawer from 'material-ui/Drawer'

// components
import DrawerList from './DrawerList'

const Drawer = ({ drawerVisible, handleCloseDrawer }) => {
  return (
    <MaterialDrawer open={drawerVisible} onClose={handleCloseDrawer}>
      <DrawerList />
    </MaterialDrawer>
  )
}

Drawer.propTypes = {
  drawerVisible: PropTypes.object.isRequired,
  handleCloseDrawer: PropTypes.func.isRequired,
}

export default Drawer
