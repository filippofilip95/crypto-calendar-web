import Link from 'next/link'
import PropTypes from 'prop-types'

// ui
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  addEvent: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  }
})

const Loading = ({ classes }) => (
  <Typography variant="subheading" paragraph>
    No Events to show.
    <Link href="create">
      <Typography variant="body1" className={classes.addEvent} align="center">
        Add Event
      </Typography>
    </Link>
  </Typography>
)

Loading.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loading)
