import React from 'react'
import PropTypes from 'prop-types'

// ui
import { withStyles } from 'material-ui/styles'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Avatar from 'material-ui/Avatar'

const styles = theme => ({
  avatar: {
    margin: 10,
    width: 30,
    height: 30
  },
  leftColumn: {
    flexBasis: '25%',
    display: 'flex',
    alignItems: 'center'
  },
  rightColumn: {
    flexBasis: '75%',
    display: 'flex',
    alignItems: 'center'
  }
})
const EventsListRow = ({ event, classes }) => (
  <ExpansionPanel className={classes.expansionPanel}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <div className={classes.leftColumn}>
        <Avatar
          alt="Adelle Charles"
          src={`https://www.cryptocompare.com${event.cryptoCoin.imageUrl}`}
          className={classes.avatar}
        />
        <Typography variant="subheading">
          {event.cryptoCoin.fullName}
        </Typography>
      </div>
      <div className={classes.rightColumn}>
        <Typography variant="subheading">{event.title}</Typography>
        {console.log(event)}
      </div>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>{event.description}</Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

EventsListRow.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object
}

export default withStyles(styles)(EventsListRow)
