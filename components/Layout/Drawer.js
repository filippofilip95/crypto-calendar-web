import PropTypes from 'prop-types'

// ui
import MaterialDrawer from 'material-ui/Drawer'

// components
import DrawerList from './DrawerList'

const Drawer = ({ drawerVisible, handleCloseDrawer }) => {
  return (
    <MaterialDrawer open={drawerVisible} onClose={handleCloseDrawer}>
      <div onClick={handleCloseDrawer}>
        <DrawerList />
      </div>
    </MaterialDrawer>
  )
}

Drawer.propTypes = {
  drawerVisible: PropTypes.bool.isRequired,
  handleCloseDrawer: PropTypes.func.isRequired
}

export default Drawer
