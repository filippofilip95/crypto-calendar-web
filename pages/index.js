import withInit from '../lib/withInit'

// components
import Layout from '../hoc/LayoutHoc'
import PostList from '../components/PostList'

export default withInit(() =>
  <Layout>
    <PostList />
  </Layout>,
)
