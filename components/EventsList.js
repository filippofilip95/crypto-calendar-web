import React from 'react'
import PropTypes from 'prop-types'
import { branch, renderComponent } from 'recompose'

// ui
import { withStyles } from 'material-ui/styles'

// compoentns
import EventsListRow from './EventsListRow'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

const EventsList = ({ allEvents = [], classes }) => (
  <div className={classes.root}>
    {allEvents.map(event => <EventsListRow key={event.id} event={event} />)}
  </div>
)

EventsList.propTypes = {
  classes: PropTypes.object.isRequired,
  allEvents: PropTypes.array
}

export default withStyles(styles)(EventsList)
