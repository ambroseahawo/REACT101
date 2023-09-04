import React from "react"

const Counter = () => {
  return (
    <div className="container">
      <h2>React Example 1 - Counter</h2>
      <div className="inner-content">
        <h1>0</h1>
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