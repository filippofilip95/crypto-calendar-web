// ui
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const SnackBarContext = React.createContext(() => null)

export class SnackBarProvider extends React.PureComponent {
  state = {
    visible: false
  }

  showSnackbar = snackBarConfig => {
    this.setState({
      visible: true,
      ...snackBarConfig
    })
  }

  hideSnackbar = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible, ...snackBarConfig } = this.state
    return (
      <SnackBarContext.Provider value={this.showSnackbar}>
        {this.props.children}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={visible}
          autoHideDuration={4000}
          onClose={this.hideSnackbar}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.hideSnackbar}
            >
              <Icon>close</Icon>
            </IconButton>
          ]}
          {...snackBarConfig}
        />
      </SnackBarContext.Provider>
    )
  }
}

export const withSnackbar = Component => props => (
  <SnackBarContext.Consumer>
    {showSnackbar => <Component {...props} showSnackbar={showSnackbar} />}
  </SnackBarContext.Consumer>
)
