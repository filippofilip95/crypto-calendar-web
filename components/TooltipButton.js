import React from 'react'
import PropTypes from 'prop-types'

// ui
import IconButton from 'material-ui/IconButton'
import Tooltip from 'material-ui/Tooltip'
import Icon from 'material-ui/Icon'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  tooltipButton: {
    marginLeft: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  }
})

const TooltipButton = ({
  id,
  title,
  iconName,
  onClick,
  placement = 'bottom',
  color = 'inherit',
  buttonSize = 48,
  classes,
  ...rest
}) => (
  <Tooltip id={id} title={title} placement={placement}>
    <IconButton
      style={{ height: buttonSize, width: buttonSize }}
      color={color}
      onClick={onClick}
      className={classes.tooltipButton}
      {...rest}
    >
      <Icon>{iconName}</Icon>
    </IconButton>
  </Tooltip>
)

TooltipButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  placement: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  size: PropTypes.string,
  buttonSize: PropTypes.number,
  classes: PropTypes.object,
  rest: PropTypes.object
}

export default withStyles(styles)(TooltipButton)
