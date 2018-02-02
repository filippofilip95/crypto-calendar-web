import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//ui
import HeaderUi from '../components/Header'

// Actions
import AppActions from '../store/appReducer'

class Header extends React.PureComponent {
  handleOpenDrawer = () => {
    this.props.onOpenDrawer()
  }

  render() {
    return <HeaderUi handleOpenDrawer={this.handleOpenDrawer} />
  }
}

Header.propTypes = {
  onOpenDrawer: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  ...AppActions,
}

export default connect(null, mapDispatchToProps)(Header)
