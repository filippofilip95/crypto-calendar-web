import Link from 'next/link'
import PropTypes from 'prop-types'

//ui
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

// helpers
import { withStyles } from 'material-ui/styles'

// styles
import styles from './styles/headerStyles'

const Header = ({ classes, handleOpenDrawer }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleOpenDrawer}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Link href="/">
            <Typography
              variant="title"
              color="inherit"
              className={classes.headerTitle}
            >
              Crypto Events Calendar
            </Typography>
          </Link>
          <Link href="/">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(Header)
