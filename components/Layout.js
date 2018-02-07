import React from 'react'

// utils
import { withStyles } from 'material-ui/styles'

// hoc
import Header from '../hoc/HeaderHoc'
import Drawer from '../hoc/DrawerHoc'

//styles
import styles, { appContainerStyles } from '../components/styles/AppStyles'

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

export default withStyles(appContainerStyles)(App)