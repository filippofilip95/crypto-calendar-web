import gql from 'graphql-tag'

export const createEvent = gql`
  mutation createEvent(
    $category: EventCategory!
    $date: DateTime!
    $description: String!
    $email: String
    $isAllowed: Boolean
    $source: String!
    $title: String!
    $cryptoCoinId: ID
    $cryptoCoin: EventcryptoCoinCryptoCoin
    $imageProofId: ID
    $imageProof: EventimageProofImageProof
  ) {
    createEvent(
      category: $category
      date: $date
      description: $description
      email: $email
      isAllowed: $isAllowed
      source: $source
      title: $title
      cryptoCoinId: $cryptoCoinId
      cryptoCoin: $cryptoCoin
      imageProofId: $imageProofId
      imageProof: $imageProof
    ) {
      id
    }
  }
`
