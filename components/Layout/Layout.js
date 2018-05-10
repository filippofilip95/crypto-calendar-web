// utils
import { withStyles } from 'material-ui/styles'

// hoc
import Header from '../../hoc/HeaderHoc'
import Drawer from '../../hoc/DrawerHoc'
import Fab from '../../hoc/FabHoc'

//styles
import styles from '../../components/styles/appStyles'

const App = ({ children, classes, drawerVisible }) => (
  <main className={classes.mainContainer}>
    <Header />
    <Drawer />
    <div className={classes.appContainer}>
      <div
        className={`${classes.appContent} ${
          drawerVisible ? classes.drawerPadding : ''
        }`}
      >
        {children}
      </div>
    </div>
    <Fab />
  </main>
)

export default withStyles(styles)(App)
