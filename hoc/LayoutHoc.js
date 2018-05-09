import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

// components
import Layout from '../components/Layout/Layout'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default props => (
  <Layout {...props}>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
    {props.children}
  </Layout>
)
