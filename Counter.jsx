import React, { PureComponent } from 'react'

class Counter extends PureComponent {
  state = { counter: 0 }
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
