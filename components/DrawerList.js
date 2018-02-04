import React from 'react'
import Link from 'next/link'

// ui
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'

// icon
import InboxIcon from 'material-ui-icons/Inbox'
import CreateIcon from 'material-ui-icons/Create'
import InfoOutlineIcon from 'material-ui-icons/InfoOutline'

const styles = {
  list: {
    width: 250,
  },
}

const DrawerList = ({ classes }) =>
  <List className={classes.list}>
    <Link href="create" prefetch>
      <ListItem button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Create Event" />
      </ListItem>
    </Link>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </List>

export default withStyles(styles)(DrawerList)
