import React from 'react'
import PropTypes from 'prop-types'

// ui
import Paper from 'material-ui/Paper'
import { withStyles, typography } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions
} from 'material-ui/ExpansionPanel'
import Icon from 'material-ui/Icon'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import Tooltip from 'material-ui/Tooltip'

// components
import TooltipButton from './TooltipButton'

// constants
import { IMG_URL_PREFIX } from '../lib/constants'

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
      <Grid container alignItems="center">
        <Grid item xs={5} md={3}>
          <div className={classes.centeredRow}>
            <Avatar
              alt={event.cryptoCoin.symbol}
              src={`${IMG_URL_PREFIX}${event.cryptoCoin.imageUrl}`}
              className={classes.coinImage}
            />
            <Typography className={classes.coinName} variant="subheading">
              {event.cryptoCoin.fullName}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={7} md={9} zeroMinWidth>
          <div className={classes.centeredRow}>
            <Typography variant="body2" noWrap>
              {event.title}
              {!expanded && (
                <span className={classes.eventDesciption}>
                  {` -  ${event.description}`}
                </span>
              )}
            </Typography>
            <div
              className={
                expanded ? classes.actionButtonsExpanded : classes.actionButtons
              }
            >
              <TooltipButton
                id="tooltip-image-proof"
                title="Show Image Proof"
                onClick={showImageProof}
                iconName="photo"
                color="primary"
                buttonSize={35}
              />
              <TooltipButton
                id="tooltip-open-source-link"
                title="Open Source Link"
                onClick={openSourceLink}
                iconName="open_in_new"
                color="secondary"
                buttonSize={35}
              />
              <TooltipButton
                id="tooltip-create-alert"
                title="Create Alert"
                onClick={createAlert}
                iconName="add_alert"
                buttonSize={35}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </ExpansionPanelSummary>
    <Divider />
    <ExpansionPanelDetails>
      <Grid container>
        <Grid item xs={5} md={3} />
        <Grid item xs={7} md={9}>
          <Typography variant="body1">{event.description}</Typography>
        </Grid>
      </Grid>
    </ExpansionPanelDetails>
    <ExpansionPanelActions>
      <Button size="small" color="primary">
        Create ALert
      </Button>
      <Button size="small" color="secondary">
        View Source
      </Button>
    </ExpansionPanelActions>
  </ExpansionPanel>
)

EventsListRow.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
}

export default withStyles(styles)(EventsListRow)
