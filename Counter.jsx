import React, { Component } from 'react'

class Counter extends Component {
  state = { counter: 0 }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.counter !== nextState.counter
  }
  onClick = () =>
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  render() {
    return (
      <div>
        <button onClick={this.onClick}>입력</button>
        {this.state.counter}
      </div>
    )
  }
}

export default Counter
