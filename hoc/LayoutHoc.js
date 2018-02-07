import NProgress from 'nprogress'
import Router from 'next/router'

// components
import Layout from '../components/Layout'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default props =>
  <Layout {...props}>
    {props.children}
  </Layout>
