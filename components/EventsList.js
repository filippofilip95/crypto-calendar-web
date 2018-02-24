import React from 'react'
import PropTypes from 'prop-types'

// ui
import { withStyles } from 'material-ui/styles'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Avatar from 'material-ui/Avatar'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
  leftColumn: {
    flexBasis: '25%',
    display: 'flex',
    alignItems: 'center',
  },
  rightColumn: {
    flexBasis: '75%',
    display: 'flex',
    alignItems: 'center',
  },
})

const EventsList = ({ allEvents = [], classes }) => {
  return (
    <div className={classes.root}>
      {allEvents.map(event =>
        <ExpansionPanel key={event.id} className={classes.expansionPanel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.leftColumn}>
              <Avatar
                alt="Adelle Charles"
                src={`https://www.cryptocompare.com${event.cryptoCoin
                  .imageUrl}`}
                className={classes.avatar}
              />
              <Typography variant="subheading">
                {event.cryptoCoin.fullName}
              </Typography>
            </div>
            <div className={classes.rightColumn}>
              <Typography variant="subheading">
                {event.title}
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {event.description}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>,
      )}
    </div>
  )
}

EventsList.propTypes = {
  classes: PropTypes.object.isRequired,
  allEvents: PropTypes.array,
}

export default withStyles(styles)(EventsList)
