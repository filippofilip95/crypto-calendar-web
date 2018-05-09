import PropTypes from 'prop-types'

// utils
import { withStyles } from 'material-ui/styles'

// ui
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import Tooltip from 'material-ui/Tooltip'

// styles
import styles from '../styles/fabStyles'

const Fab = ({ classes, navigateToCreateEventPage }) => (
  <Tooltip id="fab-tooltip" title="Create Event" placement="left">
    <Button
      variant="fab"
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={navigateToCreateEventPage}
    >
      <Icon>add_icon</Icon>
    </Button>
  </Tooltip>
)

Fab.propTypes = {
  classes: PropTypes.object.isRequired,
  navigateToCreateEventPage: PropTypes.func.isRequired
}

export default withStyles(styles)(Fab)
