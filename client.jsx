import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'

import Tictactoe from './Tictactoe'

const App = hot(Tictactoe)

ReactDOM.render(<App />, document.getElementById('root'))
