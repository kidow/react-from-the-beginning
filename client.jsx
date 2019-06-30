import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

import Counter from './Counter'

const App = hot(Counter)

ReactDOM.render(<App />, document.getElementById('root'))
