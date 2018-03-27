import { compose, withState, withHandlers, withProps } from 'recompose'
import { compose as apolloCompose, graphql } from 'react-apollo'
import { connect } from 'react-redux'

// actions
import AppActions from '../store/appReducer'

// components
import EventsListRow from '../components/EventsListRow'

const withStates = withState('expanded', 'setExpanded', false)

const mapStateToProps = state => ({
  galleryVisible: state.appReducer.galleryVisible,
  galleryImageUrl: state.appReducer.galleryImageUrl
})

const mapDispatchToProps = {
  ...AppActions
}

const withMethods = withHandlers({
  togglePanel: ({ setExpanded, expanded }) => () => {
    setExpanded(!expanded)
  },
  showImageProof: ({ onShowGallery, event }) => e => {
    e.stopPropagation()
    onShowGallery(event)
  },
  createAlert: () => e => {
    e.stopPropagation()
    console.log('create alert')
  },
  openSourceLink: () => e => {
    e.stopPropagation()
    console.log('open source')
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStates,
  withMethods
)(EventsListRow)
