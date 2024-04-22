
import React from 'react'

function count({ count, increment, decrement, reset}) {

  return (

        <div>
          <p id="count" >0</p>
          <button onClick={increment}>Add (+1)</button>
          <button onClick={decrement}>Subtract (-1)</button>
          <button onClick={reset}>reset</button>
        </div>

  )
}

export default count