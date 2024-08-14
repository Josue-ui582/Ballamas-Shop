import React from "react";

const Product1 = () => {

    return(
        <div className="checkout__product__1">
            <div className="cart1__details">
                <img src="cart1.png" alt="cart__1" />
                <div>
                    <h6>T-Shirt</h6>
                    <p className="cart__type">Color: Green - Size: Large</p>
                </div>
            </div>
            <div>
                <p className="cart__prices">$174.00</p>
            </div>
        </div>
    )
}

export default Product1