import React, { useState } from "react"
import "./style.css"

const Counter = () => {
  const [number, setNumber] = useState(0)

  return (
    <div className="container">
      <h2>React Example 1 - Counter</h2>
      <div className="inner-content">
        <h1>{number}</h1>
        <div className="buttons">
          <button>Increase</button>
          <button>Decrease</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Counter