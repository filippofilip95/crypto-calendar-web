// @TODO refactor to jss
export default `
      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: #F7CB15;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #ff9300, 0 0 5px #ff9300;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `

export const appContainerStyles = theme => ({
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
