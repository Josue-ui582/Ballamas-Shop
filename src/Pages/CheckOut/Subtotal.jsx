import React from "react";

const Subtotal = () => {
    return(
        <>
            <div className="subtotal__content">
                <p>Subtotal</p>
                <p>$524.00</p>
            </div>
            <div className="subtotal__content">
                <p>Discount</p>
                <p>$0</p>
            </div>
            <div className="order__total">
                <p>Order total</p>
                <p>$524.00</p>
            </div>
        </>
    )
}

export default Subtotal