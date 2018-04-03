import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { CircularProgress } from 'material-ui/Progress'
import purple from 'material-ui/colors/purple'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
})

const Loading = ({ classes }) => (
  <CircularProgress className={classes.progress} size={50} />
)

Loading.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loading)
