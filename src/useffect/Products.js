import React, { useEffect, useState } from "react";
import "./style.css";

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>FakeShop</h2>
        </div>
      </div>
      <div className="ui grid container">
        {products.length === 0 ? (
          <div>Loading...</div>
        ) : (
          products.map(item => {
            return (
              <div className="four wide column" key={item.id}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="content">
                      <div className="header">{item.title}</div>
                      <div className="meta price">$ {item.price}</div>
                      <div className="meta">{item.category}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Products