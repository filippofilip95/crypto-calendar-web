export default theme => ({
  appContent: {
    padding: theme.spacing.unit * 3,
    width: '85%',
    maxWidth: 1200
  },
  appContainer: {
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainContainer: {
    height: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F2F2F2'
  },
  drawerPadding: {
    paddingLeft: 130
  }
})
