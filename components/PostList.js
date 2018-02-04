import React from 'react'
import { withStyles } from 'material-ui/styles'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import { gql, graphql } from 'react-apollo'
import ErrorMessage from './ErrorMessage'
import PostUpvoter from './PostUpvoter'
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
})

const POSTS_PER_PAGE = 10

function PostList({
  data: { loading, error, allPosts, _allPostsMeta },
  classes,
  loadMorePosts,
}) {
  if (error) return <ErrorMessage message="Error loading posts." />
  if (allPosts && allPosts.length) {
    const areMorePosts = allPosts.length < _allPostsMeta.count
    return (
      <section>
        {allPosts.map((post, index) =>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Expansion Panel 1
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
              <li key={post.id}>
                <div>
                  <span>
                    {index + 1}.{' '}
                  </span>
                  <a href={post.url}>
                    {post.title}
                  </a>
                  <PostUpvoter id={post.id} votes={post.votes} />
                </div>
              </li>
            </ExpansionPanelDetails>
          </ExpansionPanel>,
        )}
        {areMorePosts &&
          <Button raised color="primary" onClick={() => loadMorePosts()}>
            Show More
          </Button>}
      </section>
    )
  }
  return <div>Loading</div>
}

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default withStyles(styles)(
  graphql(allPosts, {
    options: {
      variables: {
        skip: 0,
        first: POSTS_PER_PAGE,
      },
    },
    props: ({ data }) => ({
      data,
      loadMorePosts: () => {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [
                ...previousResult.allPosts,
                ...fetchMoreResult.allPosts,
              ],
            })
          },
        })
      },
    }),
  })(PostList),
)
