import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
// components
import GalleryModal from '../components/GalleryModal'

// Actions
import AppActions from '../store/appReducer'

const mapStateToProps = state => ({
  galleryVisible: state.appReducer.galleryVisible,
  activeGalleryEvent: state.appReducer.activeGalleryEvent
})

const mapDispatchToProps = {
  ...AppActions
}

const withComponentHandlers = withHandlers({
  handleHideGallery: props => () => {
    props.onHideGallery()
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withComponentHandlers
)(GalleryModal)
