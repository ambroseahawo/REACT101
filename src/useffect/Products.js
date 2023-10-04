import React from "react";

const Products = () => {
  return (
    <React.Fragment>
      <div class="ui fixed menu">
        <div class="ui container center">
          <h2>FakeShop</h2>
        </div>
      </div>
      <div class="four wide column">
        <div class="ui link cards">
          <div class="card">
            <div class="image">
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>
            <div class="content">
              <div class="header">HEADER</div>
              <div class="meta price">90</div>
              <div class="meta">CATEGORY</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Products