import React from 'react'

const CounterForm = ({ handleCount, count }) => {
  return (
    <div>
      <div>{ count }</div>
      <input
        type='button'
        value='increment'
        onClick={handleCount}
      />
    </div>
  )
}
export default CounterForm
