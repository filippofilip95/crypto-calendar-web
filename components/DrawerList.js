import React from 'react'
import Link from 'next/link'

// ui
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import Icon from 'material-ui/Icon'

const styles = {
  list: {
    width: 250
  }
}

const DrawerList = ({ classes }) => (
  <List className={classes.list}>
    <Link href="/" prefetch>
      <ListItem button>
        <ListItemIcon>
          <Icon>list</Icon>
        </ListItemIcon>
        <ListItemText primary="Events List" />``
      </ListItem>
    </Link>
    <Link href="create" prefetch>
      <ListItem button>
        <ListItemIcon>
          <Icon>create</Icon>
        </ListItemIcon>
        <ListItemText primary="Create Event" />
      </ListItem>
    </Link>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <Icon>inbox</Icon>
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Icon>info_outline</Icon>
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </List>
)

export default withStyles(styles)(DrawerList)
