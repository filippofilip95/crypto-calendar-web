import Link from 'next/link'
import PropTypes from 'prop-types'

// ui
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Buton from 'material-ui/Button'

const styles = theme => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Loading = ({ classes }) => (
  <div>
    <Typography variant="subheading" align="center" gutterBottom>
      No Events to show.
    </Typography>
    <div className={classes.buttonContainer}>
      <Link href="/create-event">
        <Buton color="primary" align="center">
          Add Event
        </Buton>
      </Link>
    </div>
  </div>
)

Loading.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loading)
