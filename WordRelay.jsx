const React = require('react')
const { Component } = React

class WordRelay extends Component {
  state = {
    word: '기도우',
    value: '',
    result: ''
  }
  onSubmit = e => {
    e.preventDefault()
    const { word, value } = this.state
    if (word[word.length - 1] === value[0]) {
      this.setState({
        result: '딩동댕',
        word: value,
        value: ''
      })
      this.input.focus()
    } else {
      this.setState({
        result: '땡',
        value: ''
      })
    }
  }
  onChange = e => this.setState({ value: e.target.value })
  onRef = c => (this.input = c)
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRef}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = WordRelay
