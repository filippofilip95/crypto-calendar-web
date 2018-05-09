// utils
import { withStyles } from 'material-ui/styles'

// hoc
import Header from '../../hoc/HeaderHoc'
import Drawer from '../../hoc/DrawerHoc'
import Fab from '../../hoc/FabHoc'

//styles
import styles, { appContainerStyles } from '../../components/styles/appStyles'

const App = ({ children, classes }) => (
  <main className={classes.mainContainer}>
    <Header />
    <div className={classes.appContainer}>
      <div className={classes.appContent}>{children}</div>
      <Drawer />
    </div>
    <Fab />
    <style jsx global>
      {styles}
    </style>
  </main>
)

export default withStyles(appContainerStyles)(App)
