import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

import WordRelay from './WordRelay'

const App = hot(WordRelay)

ReactDOM.render(<App />, document.getElementById('root'))
