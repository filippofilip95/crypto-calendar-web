export default theme => ({
  appContent: {
    display: 'flex',
    flex: 1,
    maxWidth: 1200,
    padding: 20,
    justifyContent: 'center',
    minWidth: 0
  },
  appContainer: {
    display: 'flex',
    flex: [1, 0, 0],
    justifyContent: 'center',
    minWidth: 0,
    overflowY: 'scroll'
  },
  mainContainer: {
    height: '100vh',
    margin: 0,
    display: 'flex',
    flexDirection: 'column'
  }
})
