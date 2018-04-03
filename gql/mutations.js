import gql from 'graphql-tag'

export const createEvent = gql`
  mutation createEvent(
    $category: [EventCategory!]!
    $description: String!
    $email: String
    $isAllowed: Boolean
    $source: String!
    $title: String!
    $cryptoCoinId: ID
    $fileId: ID!
    $startDate: DateTime!
    $endDate: DateTime
    $isAllDay: Boolean
    $isEstimatedTime: Boolean
    $isUnkownEndDate: Boolean
  ) {
    createEvent(
      category: $category
      startDate: $startDate
      date: {
        startDate: $startDate
        endDate: $endDate
        isAllDay: $isAllDay
        isEstimatedTime: $isEstimatedTime
        isUnkownEndDate: $isUnkownEndDate
      }
      description: $description
      email: $email
      isAllowed: $isAllowed
      source: $source
      title: $title
      cryptoCoinId: $cryptoCoinId
      fileId: $fileId
    ) {
      id
    }
  }
`
