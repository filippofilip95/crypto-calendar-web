import { compose, withProps, withState, withPropsOnChange } from 'recompose'
import { reduxForm } from 'redux-form'
import { graphql, compose as apolloCompose } from 'react-apollo'
import debounce from 'lodash.debounce'

// gql
import { allCryptoCoins } from '../../gql/queries'
import { createEvent } from '../../gql/mutations'

// components
import createEventForm from '../../components/forms/CreateEventForm'

import ENV from '../../env'

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
    props: ({ mutate, ownProps: { setMutationLoading } }) => ({
      onSubmit: async variables => {
        try {
          setMutationLoading(true)

          let data = new FormData()
          data.append('data', variables.imageProof)

          const response = await fetch(ENV.FILE_UPLOAD_URL, {
            method: 'POST',
            body: data
          })
          const file = await response.json()
          variables.fileId = file.id

          await mutate({
            variables
          })

          setMutationLoading(false)
        } catch (e) {
          console.log(e)
          setMutationLoading(false)
        }
      }
    })
  })
)

const withReduxForm = reduxForm({
  form: 'createEventForm'
})

export default compose(withInit, withData, withReduxForm)(createEventForm)
