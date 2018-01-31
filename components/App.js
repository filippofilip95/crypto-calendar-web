import NProgress from 'nprogress'
import Router from 'next/router'

//styles
import styles from './styles/AppStyles'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const App = ({ children }) =>
  <main>
    {children}
    <style jsx global>
      {styles}
    </style>
  </main>

export default App
