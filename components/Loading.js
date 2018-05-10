import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import purple from 'material-ui/colors/purple'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Loading = ({ classes }) => (
  <div className={classes.loadingContainer}>
    <CircularProgress className={classes.progress} size={50} />
  </div>
)

Loading.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loading)
