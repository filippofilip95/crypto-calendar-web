import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

// components
import Layout from '../components/Layout/Layout'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const mapStateToProps = state => ({
  drawerVisible: state.appReducer.drawerVisible
})

export default compose(connect(mapStateToProps))(props => (
  <Layout {...props}>
    <Head>
      {/* Import CSS for nprogress */}
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
    {props.children}
  </Layout>
))
