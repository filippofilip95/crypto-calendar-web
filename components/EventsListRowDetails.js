import PropTypes from 'prop-types'
import { format } from 'date-fns'

// ui
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

// styles
import styles from './styles/eventListRowStyles'

const EventsListRowDetails = ({ event, classes }) => (
  <Grid container>
    <Grid item xs={5} md={3}>
      {console.log(event.date)}
      <Typography variant="body2">{event.category}</Typography>
      <Typography variant="body1">
        Starts: {format(event.date.startDate, 'Do MMMM HH:mm')}
      </Typography>
      {event.date.endDate && (
        <Typography variant="body1">
          Ends: &nbsp;&nbsp;
          {format(event.date.endDate, 'Do MMMM HH:mm')}
        </Typography>
      )}
      <Typography variant="caption" className={classes.eventAddedDate}>
        {`Added: ${format(event.createdAt, 'Do MMMM YYYY')}`}
      </Typography>
    </Grid>
    <Grid item xs={7} md={9}>
      <Typography variant="body1">{event.description}</Typography>
    </Grid>
  </Grid>
)

EventsListRowDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
}

export default EventsListRowDetails
