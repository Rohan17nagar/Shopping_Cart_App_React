import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
const Home = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <div className="product">
                  <div className="product__img">
                      <Link to={`/details/${product.id}`}><img src={`/images/${product.image}`} alt="products" /></Link>
                    
                  </div>
                  <div className="product__name">{product.name}</div>
                  <div className="row">
                    <div className="col-6">
                      <div className="product__price">
                        <span className="actualPrice">{currencyFormatter.format(product.price, {
                          locale: "en-US",
                        })}</span>
                        <span className="discount">{product.discount}%</span>
                      </div>
                    </div>
                    
                    <div className="col-6">
                      <div className="product__discount__price">
                    
                        {currencyFormatter.format(product.discountPrice, {
                          locale: "en-US",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
