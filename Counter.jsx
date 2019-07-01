import React, { memo, useState } from 'react'

const Counter = memo(() => {
  const [counter, setCounter] = useState(0)
  const onClick = () => setCounter(counter + 1)
  return (
    <div>
      <button onClick={onClick}>입력</button>
      {counter}
    </div>
  )
})

export default Counter
