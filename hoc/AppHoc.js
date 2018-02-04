import NProgress from 'nprogress'
import Router from 'next/router'
import { compose } from 'recompose'

import withData from '../lib/withData'
import withRoot from '../lib/withRoot'

// components
import App from '../components/App'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default compose(withData, withRoot)(App)
