import React from 'react'

class Counter extends React.Component {
  state = { count: 0 }

  // handleCount = () => {
  //   this.setState({count: this.state.count + 1 })
  // }

  handleCount = () => {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
  }

  render () {
    const { count } = this.state
    return (
      <div>
        <div>Current count: { count }</div>
        <input type='button' value='increment value' onClick={this.handleCount} />
      </div>
    )
  }
}

export default Counter
