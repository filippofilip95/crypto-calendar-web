import NProgress from 'nprogress'
import Router from 'next/router'

import withData from '../lib/withData'
import withRoot from '../lib/withRoot'

// containers
import Header from './Header'
import Drawer from './Drawer'

import { withStyles } from 'material-ui/styles'

//styles
import styles, { appContainerStyles } from '../components/styles/AppStyles'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const App = ({ children, classes }) =>
  <main>
    <Header />
    <div className={classes.container}>
      <div className={classes.appContainer}>
        {children}
      </div>
    </div>
    <style jsx global>
      {styles}
    </style>
    <Drawer />
  </main>

export default withData(withRoot(withStyles(appContainerStyles)(App)))
