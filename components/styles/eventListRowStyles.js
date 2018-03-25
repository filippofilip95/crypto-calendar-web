export default theme => ({
  coinImage: {
    width: 35,
    height: 35,
    borderRadius: 0
  },
  zeroMinWidth: {
    minWidth: 0
  },
  centeredRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  coinName: {
    paddingLeft: theme.spacing.unit * 2
  },
  eventDesciption: theme.typography.body1,
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  actionButtons: {
    display: 'none'
  },
  actionButtonsExpanded: {
    display: 'flex'
  },
  eventSummary: {
    '&:hover $actionButtons': {
      display: 'flex'
    }
  }
})
