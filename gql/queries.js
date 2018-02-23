import gql from 'graphql-tag'

export const allCryptoCoins = gql`
  query allCryptoCoins(
    $filter: CryptoCoinFilter
    $orderBy: CryptoCoinOrderBy
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    allCryptoCoins(
      filter: $filter
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
      cId
      fullName
    }
  }
`
