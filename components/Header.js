import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

//ui
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

// helpers
import { withStyles } from 'material-ui/styles'

// styles
import styles from './styles/HeaderStyles'

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
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography
              type="title"
              color="inherit"
              className={classes.headerTitle}
            >
              Crypto Events Calendar
            </Typography>
          </Link>
          <Link href="material">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  handleOpenDrawer: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
