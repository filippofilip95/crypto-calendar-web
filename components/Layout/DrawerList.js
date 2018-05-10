import Link from 'next/link'

// ui
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'

import Icon from 'material-ui/Icon'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  listContainer: {
    paddingLeft: theme.spacing.unit,
    marginTop: 48,
    [theme.breakpoints.up('sm')]: {
      marginTop: 64
    }
  }
})

const ListRow = ({ href, icon, text, color }) => (
  <Link href={href}>
    <ListItem button>
      <ListItemIcon>
        <Icon style={{ color }}>{icon}</Icon>
      </ListItemIcon>
      <ListItemText
        style={{ paddingLeft: 0, paddingRight: 0 }}
        disableTypography
        primary={<Typography variant="body1">{text}</Typography>}
      />
    </ListItem>
  </Link>
)

// <Divider />
// <ListRow href="/" icon="verified_user" text="Privacy" />
// <ListRow href="/" icon="description" text="Terms" />
// <ListRow href="/" icon="info" text="About" />

const DrawerList = ({ classes, theme: { palette } }) => (
  <List className={classes.listContainer}>
    <ListRow
      href="/"
      icon="event"
      color={palette.primary.main}
      text="Upcoming Events"
    />
    <ListRow href="/" icon="history" color="#4285F4" text="Past Events" />
    <ListRow
      href="/create"
      color={palette.secondary.main}
      icon="add_circle"
      text="Create Event"
    />
    <Divider />
    <ListRow href="/" icon="label" text="Advertising" />
    <ListRow href="/" icon="settings" text="Settings" />
    <ListRow href="/" icon="code" text="Api" />
    <ListRow href="/" icon="help" text="Help" />
  </List>
)

export default withStyles(styles, { withTheme: true })(DrawerList)
