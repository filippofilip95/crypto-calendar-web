import PropTypes from 'prop-types'
import { branch, renderComponent } from 'recompose'
import groupby from 'lodash.groupby'
import { startOfDay } from 'date-fns'

// ui
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

// utils
import { getFormattedDate } from '../lib/utils'

// components
import EventsListRow from '../hoc/EventsListRowHoc'

// styles
import styles from './styles/eventListStyles'

const EventsList = ({ allEvents = [], classes }) => {
  const groupedEvents = groupby(allEvents, item => startOfDay(item.startDate))
  const dateKeys = Object.keys(groupedEvents)

  const events = dateKeys.map(eventDate => (
    <div className={classes.eventListGroup} key={eventDate}>
      <Typography variant="body1" className={classes.eventListDate}>
        {getFormattedDate(eventDate)}
      </Typography>
      {groupedEvents[eventDate].map(event => (
        <EventsListRow key={event.id} event={event} />
      ))}
    </div>
  ))

  return <div className={classes.root}>{events}</div>
}

EventsList.propTypes = {
  classes: PropTypes.object.isRequired,
  allEvents: PropTypes.array
}

export default withStyles(styles)(EventsList)
