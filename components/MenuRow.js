import Link from 'next/link'
import PropTypes from 'prop-types'

// utils
import { withStyles } from 'material-ui/styles'

// ui
import { MenuList, MenuItem } from 'material-ui/Menu'
import { ListItemIcon, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'

const styles = theme => ({
  menuItem: {
    height: theme.spacing.unit * 2
  },
  listItemText: {
    paddingLeft: 0,
    paddingRight: 0
  }
})

const MenuRow = ({ href, icon, text, color, selected, classes }) => (
  <Link href={href}>
    <MenuItem selected={selected} className={classes.menuItem}>
      <ListItemIcon>
        <Icon style={{ color }}>{icon}</Icon>
      </ListItemIcon>
      <ListItemText
        className={classes.listItemText}
        disableTypography
        primary={
          <Typography variant={selected ? 'body2' : 'body1'}>{text}</Typography>
        }
      />
    </MenuItem>
  </Link>
)

MenuRow.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MenuRow)
