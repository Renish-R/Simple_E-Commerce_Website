import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import "./Card.css";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="card-page">
      <Nav />
      <div className="container mt-5 pt-5">
        <div className="row">
          {data.map((product) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={product.id}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text">Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>In stock: {product.rating.count}</p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary w-100">
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
