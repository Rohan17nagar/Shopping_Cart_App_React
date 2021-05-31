import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import currencyFormatter from "currency-formatter";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
const Details = () => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);
  console.log(product);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container mt-100">
      <div className="row">
        <div className="col-6">
          <div className="details__image">
            <img src={`/images/${product.image}`} alt="details_image" />
          </div>
        </div>
        <div className="col-6">
          <div className="details__name">{product.name}</div>
          <div className="details__prices">
            <span className="details__actual">
              {currencyFormatter.format(product.price, {
                locale: "en-US",
              })}
            </span>
            <span className="details__discount">
              {currencyFormatter.format(product.discountPrice, {
                locale: "en-US",
              })}
            </span>
          </div>

          <div className="details__info">
            <div className="details__incdec">
              <span className="dec" onClick={decQuantity}>
                <AiOutlineMinus />
              </span>
              <span className="quantity">{quantity}</span>
              <span className="inc" onClick={() => setQuantity(quantity + 1)}>
                <AiOutlinePlus />
              </span>
              <button
                className="btn-default"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product, quantity },
                  })
                }
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="details__p">
            <h4>details</h4>
            {product.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
