import React from "react";
import './Cart.css'
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
    return(
        <>
            <section className="cart">
                <div className="carts">
                    <div className="cart__section">
                        <p>Cart(3)</p>
                        <div className="delete__section">
                            <RiDeleteBin6Line />
                            <p>Clear Cart</p>
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
                        <div>
                            <p>Order</p>
                            <p>$524.00</p>
                        </div>
                        <button className="checkout">Checkout now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart