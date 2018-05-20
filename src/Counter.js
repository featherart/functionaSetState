import React from 'react'
import CounterForm from './CounterForm'

class Counter extends React.Component {
  state = { count: 0 }

  handleCount = () => {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
  }

  render () {
    const { count } = this.state
    return (
      <CounterForm handleCount={this.handleCount} count={count} />
    )
  }
}

export default Counter
