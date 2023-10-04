import React from "react";
import "./style.css"

const Products = () => {
  return (
    <div className="App">
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>FakeShop</h2>
        </div>
      </div>
      <div className="four wide column">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>
            <div className="content">
              <div className="header">HEADER</div>
              <div className="meta price">90</div>
              <div className="meta">CATEGORY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products