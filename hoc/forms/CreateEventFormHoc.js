import { compose, withProps, withState, withPropsOnChange } from 'recompose'
import { reduxForm } from 'redux-form'
import { graphql, compose as apolloCompose } from 'react-apollo'
import debounce from 'lodash.debounce'

// gql
import { allCryptoCoins } from '../../gql/queries'
import { createEvent } from '../../gql/mutations'

// components
import createEventForm from '../../components/forms/CreateEventForm'

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
          await mutate({
            variables: {
              ...variables,
              date: new Date()
            }
          })
          setMutationLoading(false)
        } catch (e) {
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
