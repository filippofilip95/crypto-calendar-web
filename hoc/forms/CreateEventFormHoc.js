import {
  compose,
  withProps,
  withState,
  withPropsOnChange,
  withHandlers
} from 'recompose'
import { reduxForm, reset, getFormValues } from 'redux-form'
import { connect, bindActionCreators } from 'react-redux'
import { graphql, compose as apolloCompose } from 'react-apollo'
import debounce from 'lodash.debounce'

// selectors
import {
  maxStartDateSelector,
  visibleEndDateFieldSelector,
  minEndDateSelector
} from '../../store/selectors'

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
    props: ({
      mutate,
      ownProps: {
        setMutationLoading,
        showSnackbar,
        formVariables: variables,
        resetCreateEventForm
      }
    }) => ({
      submitForm: async () => {
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
          resetCreateEventForm()
          showSnackbar({
            message:
              "Event successfully created. It'll be visible after confirmation."
          })
        } catch (e) {
          console.log(e)
          setMutationLoading(false)
          showSnackbar({
            message: 'Something went wrong.'
          })
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
  },
  onSubmit: () => () => {
    const { grecaptcha } = window
    if (!grecaptcha) return
    grecaptcha.execute()
  }
})

const withSubmitIfHuman = withHandlers({
  submitIfHuman: ({ submitForm }) => recaptchaToken => {
    console.log(recaptchaToken)
    recaptchaToken
      ? submitForm()
      : showSnackbar({
          message: 'You are not a human :) ReCaptcha verification failed.'
        })
  }
})

const withConnect = connect(
  state => ({
    minEndDate: minEndDateSelector(state, 'startDate'),
    maxStartDate: maxStartDateSelector(state),
    visibleEndDateField: visibleEndDateFieldSelector(state),
    formVariables: getFormValues('createEventForm')(state)
  }),
  dispatch => ({
    resetCreateEventForm: () => dispatch(reset('createEventForm'))
  })
)

const withReduxForm = reduxForm({
  form: 'createEventForm'
})

export default compose(
  withSnackbar,
  withInit,
  withMethods,
  withReduxForm,
  withConnect,
  withData,
  withSubmitIfHuman
)(CreateEventForm)
