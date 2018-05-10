import PropTypes from 'prop-types'

// utils
import { withStyles } from 'material-ui/styles'
// ui
import MaterialDrawer from 'material-ui/Drawer'

// components
import DrawerList from './DrawerList'

const styles = theme => ({
  drawerPaper: {
    zIndex: 9,
    width: 220,
    backgroundColor: '#F2F2F2',
    borderRight: 0
  }
})

const Drawer = ({ drawerVisible, classes }) => {
  return (
    <MaterialDrawer
      className={classes.drawerPaper}
      open={drawerVisible}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <DrawerList />
    </MaterialDrawer>
  )
}

Drawer.propTypes = {
  drawerVisible: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Drawer)
