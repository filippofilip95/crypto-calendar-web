import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import Lightbox from 'react-image-lightbox'

// ui
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Modal from 'material-ui/Modal'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import Icon from 'material-ui/Icon'
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card'

// components
import TooltipButton from './TooltipButton'

// styles
import styles from './styles/galleryModalStyles'

// constants
import { IMG_URL_PREFIX } from '../lib/constants'
import ENV from '../env'

const GalleryModal = ({
  galleryVisible,
  handleHideGallery,
  classes,
  activeGalleryEvent
}) =>
  galleryVisible && (
    <Lightbox
      mainSrc={`${ENV.IMAGE_URL}${activeGalleryEvent.file.secret}/x500`}
      onCloseRequest={handleHideGallery}
      animationDuration={100}
      hideToolbarButtons
      toolbarButtons={[
        <TooltipButton
          id="tooltip-open-source-link"
          title="Open Source Link"
          iconName="open_in_new"
          style={{ color: 'white' }}
          buttonSize={35}
          href={activeGalleryEvent.source}
          target="_newtab"
        />,
        <TooltipButton
          id="tooltip-create-alert"
          title="Create Alert"
          style={{ color: 'white' }}
          // onClick={createAlert}
          iconName="add_alert"
          buttonSize={35}
        />,
        <TooltipButton
          id="tooltip-close-modal"
          title="Close"
          onClick={handleHideGallery}
          iconName="close"
          style={{ color: 'white' }}
          buttonSize={35}
          iconSize={30}
        />
      ]}
      imageTitle={
        <div className={classes.lightboxHeader}>
          <Avatar
            aria-label="crypto-coin-image"
            className={classes.cryptoCoinImage}
            src={`${IMG_URL_PREFIX}${activeGalleryEvent.cryptoCoin.imageUrl}`}
          />
          <div>
            <Typography variant="subheading" className={classes.headerText}>
              {` ${activeGalleryEvent.cryptoCoin.fullName} - ${
                activeGalleryEvent.title
              }`}
            </Typography>
            <Typography variant="caption" className={classes.headerText}>
              {`${format(
                activeGalleryEvent.date.startDate,
                'Do MMMM YYYY H:mm'
              )}`}
              {activeGalleryEvent.date.endDate &&
                ` - ${format(
                  activeGalleryEvent.date.endDate,
                  'Do MMMM YYYY H:mm'
                )}`}
            </Typography>
          </div>
        </div>
      }
      imageCaption={
        <div className={classes.lightboxFooter}>
          <Typography component="p" align="center" style={{ color: 'white' }}>
            {activeGalleryEvent.description}
          </Typography>
        </div>
      }
    />
  )

GalleryModal.propTypes = {
  classes: PropTypes.object.isRequired,
  galleryVisible: PropTypes.bool.isRequired
}

export default withStyles(styles)(GalleryModal)
