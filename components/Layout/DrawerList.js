import Link from 'next/link'

// ui
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { MenuList, MenuItem } from 'material-ui/Menu'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'

// components
import MenuRow from '../MenuRow'

const styles = theme => ({
  listContainer: {
    paddingLeft: theme.spacing.unit,
    marginTop: 48,
    [theme.breakpoints.up('sm')]: {
      marginTop: 64
    }
  }
})

// <Divider />
// <MenuRow href="/" icon="verified_user" text="Privacy" />
// <MenuRow href="/" icon="description" text="Terms" />
// <MenuRow href="/" icon="info" text="About" />

const DrawerList = ({ classes, theme: { palette }, activeRoute }) => {
  const isRouteActive = pathname => pathname === activeRoute
  return (
    <MenuList className={classes.listContainer}>
      <MenuRow
        selected={isRouteActive('/')}
        href="/"
        icon="event"
        color={palette.primary.main}
        text="Upcoming Events"
      />
      <MenuRow
        selected={isRouteActive('/ongoing-events')}
        href="/ongoing-events"
        icon="loop"
        color="#EF7918"
        text="Ongoing Events"
      />
      <MenuRow
        selected={isRouteActive('/completed-events')}
        href="/completed-events"
        icon="history"
        color="#4285F4"
        text="Completed Events"
      />
      <Divider />
      <MenuRow
        selected={isRouteActive('/create-event')}
        href="/create-event"
        color={palette.secondary.main}
        icon="add_circle"
        text="Create Event"
      />
      <Divider />
      <MenuRow
        // selected={isRouteActive('/')}
        href="/"
        icon="label"
        text="Advertising"
      />
      <MenuRow
        // selected={isRouteActive('/')}
        href="/"
        icon="settings"
        text="Settings"
      />
      <MenuRow
        // selected={isRouteActive('/')}
        href="/"
        icon="code"
        text="Api"
      />
      <MenuRow
        // selected={isRouteActive('/')}
        href="/"
        icon="help"
        text="Help"
      />
    </MenuList>
  )
}

export default withStyles(styles, { withTheme: true })(DrawerList)
