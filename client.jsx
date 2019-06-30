const React = require('react')
const ReactDOM = require('react-dom')
const { hot } = require('react-hot-loader/root')

const WordRelay = require('./WordRelay')

const App = hot(WordRelay)

ReactDOM.render(<App />, document.getElementById('root'))
