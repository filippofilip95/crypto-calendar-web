export default theme => ({
  modal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {},
  media: {
    height: 500
  },
  cryptoCoinImage: {
    borderRadius: 0,
    marginRight: theme.spacing.unit
  },
  lightboxHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  lightboxFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw'
  },
  headerText: {
    color: 'white',
    marginRight: theme.spacing.unit
  }
})
