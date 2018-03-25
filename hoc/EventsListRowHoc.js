import { compose, withState, withHandlers, withProps } from 'recompose'
import { compose as apolloCompose, graphql } from 'react-apollo'

// components
import EventsListRow from '../components/EventsListRow'

const withStates = withState('expanded', 'setExpanded', false)

const withMethods = withHandlers({
  togglePanel: ({ setExpanded, expanded }) => () => {
    setExpanded(!expanded)
  },
  showImageProof: () => e => {
    e.stopPropagation()
    console.log('show image proof')
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

export default compose(withStates, withMethods)(EventsListRow)
