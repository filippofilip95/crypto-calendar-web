import PropTypes from 'prop-types'

// ui
import { withStyles } from 'material-ui/styles'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel'
import Icon from 'material-ui/Icon'
import Divider from 'material-ui/Divider'

// components
import EventsListRowSummary from './EventsListRowSummary'
import EventsListRowDetails from './EventsListRowDetails'

// styles
import styles from './styles/eventListRowStyles'

const EventsListRow = ({
  event,
  classes,
  expanded,
  togglePanel,
  showImageProof,
  createAlert,
  openSourceLink
}) => (
  <ExpansionPanel expanded={expanded}>
    <ExpansionPanelSummary
      onClick={togglePanel}
      classes={{
        content: classes.zeroMinWidth
      }}
      className={classes.eventSummary}
      expandIcon={<Icon>expand_more</Icon>}
    >
      <EventsListRowSummary
        event={event}
        expanded={expanded}
        classes={classes}
        togglePanel={togglePanel}
        showImageProof={showImageProof}
        createAlert={createAlert}
        openSourceLink={openSourceLink}
      />
    </ExpansionPanelSummary>
    <Divider />
    <ExpansionPanelDetails
      classes={{
        root: classes.eventDetails
      }}
    >
      <EventsListRowDetails event={event} classes={classes} />
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

EventsListRow.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired,
  showImageProof: PropTypes.func.isRequired,
  createAlert: PropTypes.func.isRequired,
  openSourceLink: PropTypes.func.isRequired
}

export default withStyles(styles)(EventsListRow)
