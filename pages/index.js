import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'

import withData from '../lib/withData'
import withRoot from '../lib/withRoot'

export default withData(
  withRoot(props =>
    <App>
      <Header pathname={props.url.pathname} />
      <Submit />
      <PostList />
    </App>,
  ),
)
