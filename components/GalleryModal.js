import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

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

// constants
import { IMG_URL_PREFIX } from '../lib/constants'
import ENV from '../env'

const styles = theme => ({
  modal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {},
  media: {
    height: 500
  },
  cryptoCoinImage: {
    borderRadius: 0
  }
})

const GalleryModal = ({
  galleryVisible,
  handleHideGallery,
  classes,
  activeGalleryEvent
}) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={galleryVisible}
      onClose={handleHideGallery}
      className={classes.modal}
      disableAutoFocus
    >
      {activeGalleryEvent.cryptoCoin && (
        <Card>
          <CardHeader
            avatar={
              <Avatar
                aria-label="crypto-coin-image"
                className={classes.cryptoCoinImage}
                src={`${IMG_URL_PREFIX}${
                  activeGalleryEvent.cryptoCoin.imageUrl
                }`}
              />
            }
            action={
              <IconButton
                color="inherit"
                aria-label="close-gallery"
                onClick={handleHideGallery}
              >
                <Icon>close</Icon>
              </IconButton>
            }
            title={activeGalleryEvent.title}
            subheader={format(activeGalleryEvent.date, 'MM/DD/YYYY')}
          />
          <CardMedia
            className={classes.media}
            image={`${ENV.IMAGE_URL}${activeGalleryEvent.file.secret}/x500`}
            title={activeGalleryEvent.title}
          />
          <CardContent>
            <Typography component="p">
              {activeGalleryEvent.description}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Modal>
  )
}

GalleryModal.propTypes = {
  classes: PropTypes.object.isRequired,
  galleryVisible: PropTypes.bool.isRequired
}

export default withStyles(styles)(GalleryModal)
