import React from 'react'
import PropTypes from 'prop-types'

// ui
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'

// components
import TooltipButton from './TooltipButton'

// constants
import { IMG_URL_PREFIX } from '../lib/constants'

const EventsListRowSummary = ({
  event,
  classes,
  expanded,
  togglePanel,
  showImageProof,
  createAlert,
  openSourceLink
}) => (
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
      <div
        className={classes.centeredRow}
        style={{
          justifyContent: 'space-between'
        }}
      >
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
            href={event.source}
            target="_newtab"
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
)

EventsListRowSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired,
  togglePanel: PropTypes.func.isRequired,
  showImageProof: PropTypes.func.isRequired,
  createAlert: PropTypes.func.isRequired,
  openSourceLink: PropTypes.func.isRequired
}

export default EventsListRowSummary
