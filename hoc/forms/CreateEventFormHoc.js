import {
  compose,
  withProps,
  withState,
  withPropsOnChange,
  withHandlers
} from 'recompose'
import { reduxForm, formValueSelector, reset } from 'redux-form'
import { connect } from 'react-redux'
import { graphql, compose as apolloCompose } from 'react-apollo'
import debounce from 'lodash.debounce'

// gql
import { allCryptoCoins } from '../../gql/queries'
import { createEvent } from '../../gql/mutations'

// components
import CreateEventForm from '../../components/forms/CreateEventForm'
import { withSnackbar } from '../../components/SnackBar'

const withInit = compose(
  withState('mutationLoading', 'setMutationLoading', false),
  withState('coinsFilter', 'setCoinsFilter', ''),
  withPropsOnChange(['setCoinsFilter'], ({ setCoinsFilter }) => ({
    setCoinsFilter: debounce(setCoinsFilter, 500)
  }))
)

const withData = apolloCompose(
  graphql(allCryptoCoins, {
    options: ({ coinsFilter }) => ({
      variables: {
        filter: {
          fullName_contains: coinsFilter
        },
        orderBy: 'sortOrder_ASC',
        first: 100
      }
    }),
    props: ({ data: { loading, allCryptoCoins } }) => ({
      loading,
      allCryptoCoins
    })
  }),
  graphql(createEvent, {
    props: ({ mutate, ownProps: { setMutationLoading, showSnackbar } }) => ({
      onSubmit: async variables => {
        try {
          setMutationLoading(true)

          let data = new FormData()
          data.append('data', variables.imageProof)

          const response = await fetch(process.env.FILE_UPLOAD_URL, {
            method: 'POST',
            body: data
          })
          const file = await response.json()
          variables.fileId = file.id

          await mutate({
            variables
          })

          setMutationLoading(false)

          showSnackbar({
            message:
              "Event successfully created. It'll be visible after confirmation."
          })
        } catch (e) {
          console.log(e)
          setMutationLoading(false)
        }
      }
    })
  })
)

const withMethods = withHandlers({
  onSubmitFail: ({ showSnackbar }) => () => {
    showSnackbar({
      message: 'Inputs validation failed. Please correct the red fields.'
    })
  }
})

const selector = formValueSelector('createEventForm')

const maxStartDateSelector = state => {
  const { endDate, isAllDay, isUnkownEndDate } = selector(
    state,
    'endDate',
    'isAllDay',
    'isUnkownEndDate'
  )
  if (isUnkownEndDate || isAllDay) {
    return undefined
  } else {
    return endDate
  }
}

const visibleEndDateFieldSelector = state => {
  const { isAllDay, isUnkownEndDate } = selector(
    state,
    'isAllDay',
    'isUnkownEndDate'
  )
  return !(isUnkownEndDate || isAllDay)
}

const mapStateToProps = state => ({
  minEndDate: selector(state, 'startDate'),
  maxStartDate: maxStartDateSelector(state),
  visibleEndDateField: visibleEndDateFieldSelector(state)
})

const withReduxForm = reduxForm({
  form: 'createEventForm',
  onSubmitSuccess: (_, dispatch) => dispatch(reset('createEventForm'))
})

export default compose(
  withSnackbar,
  withInit,
  withData,
  withMethods,
  withReduxForm,
  connect(mapStateToProps)
)(CreateEventForm)
