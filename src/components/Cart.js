import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
const Cart = () => {
  const { products,totalQuantities,totalPrice } = useSelector((state) => state.CartReducer);
const dispatch = useDispatch();
  return (
    <div className="cart">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">TotalPrice</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
                <div className="">
                  {products.map((product) => (
                    <div className="row verticalAlign" key={product.id}>
                      <div className="col-2">
                        <div className="cart__image">
                          <img src={`/images/${product.image}`} alt="" />
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart__name">{product.name}</div>
                      </div>
                      <div className="col-2">
                        <div className="cart__price">
                          {currencyFormatter.format(product.discountPrice, {
                            locale: "en-US",
                          })}
                        </div>
                      </div>

                      <div className="col-2">
                        <div className="details__info cart__incDec">
                          <div className="details__incdec">
                            <span className="dec" onClick={()=>dispatch({type:'DEC',payload:product.id})}>
                              <AiOutlineMinus />
                            </span>
                            <span className="quantity">{product.quantity}</span>
                            <span className="inc" onClick={()=>dispatch({type:'INC',payload:product.id})}>
                              <AiOutlinePlus />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-2">
                        <div className="cart__total text-center">
                          {currencyFormatter.format(
                            product.discountPrice * product.quantity,
                            {
                              locale: "en-US",
                            }
                          )}
                        </div>
                      </div>

                      <div className="col-2">
                        <div className="cart__remove" onClick={()=>dispatch({type:"REMOVE",payload:product.id})}>
                          <BsTrashFill/>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-3 summary_col">
                <div className="summary">
                <div className="summary__heading">
                  Summary
                </div>
                <div className="summary_details">
                <div className="row mb-10">
                  <div className="col-6">
                    Total Items
                  </div>
                  <div className="col-6">
                    {totalQuantities}
                  </div>      
                </div>
                <div className="row mb-10">
                <div className="col-6">
                    Total Price
                  </div>
                <div className="col-6">
                    
                    {currencyFormatter.format(totalPrice, {
                            locale: "en-US",
                          })}
                  </div>
                </div>
                <button type="button" className="checkout">checkout</button>
                </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your cart is empty"
        )}
      </div>
    </div>
  );
};

export default Cart;
