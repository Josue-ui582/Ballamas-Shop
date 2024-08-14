import React from "react";
import './Cart.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import Cart1 from "./Cart1";
import Cart2 from "./Cart2";
import Cart3 from "./Cart3";
import Footer from "../Home/Footer"

const Cart = () => {
    return(
        <>
            <section className="cart">
                <div className="carts">
                    <div>
                        <div className="cart__section">
                            <p>Cart(3)</p>
                            <div className="delete__section">
                                <RiDeleteBin6Line />
                                <p>Clear Cart</p>
                            </div>
                        </div>
                        <div className="cart__header">
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Price</p>
                        </div>
                        <div className="cart__types">
                            <Cart1 />
                            <Cart2 />
                            <Cart3 />
                        </div>
                    </div>
                    <div className="summary">
                        <p className="summary__title">Order summary</p>
                        <div>
                            <p>Subtotal</p>
                            <p>$524.00</p>
                        </div>
                        <div>
                            <p>Discount</p>
                            <p>$0</p>
                        </div>
                        <div className="total">
                            <p>Order</p>
                            <p>$524.00</p>
                        </div>
                        <button className="checkout"><a href="CheckOut">Checkout now</a></button>
                    </div>
                </div>
            </section>
            <div className="cart__footer">
                <Footer />
            </div>
        </>
    )
}

export default Cart