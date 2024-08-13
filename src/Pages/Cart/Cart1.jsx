import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { GrSubtractCircle } from "react-icons/gr";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart1 = () => {

    // State start here

    const [more, setMore] = useState(2)

    function handleClickMore() {
        setMore(more + 1)
    }
    function handleClickSubstrat() {
        setMore(more - 1)
    }

    return(
        <div className="product__cart1">
            <div className="cart1__details">
                <img src="cart1.png" alt="cart__1" />
                <div>
                    <h6>T-Shirt</h6>
                    <p className="cart__type">Green-Large</p>
                    <p className="cart__price">$87</p>
                </div>
            </div>
            <div className="add__quality">
                <div>
                    <CiCirclePlus onClick={handleClickMore}/>
                    <span>{more}</span>
                    <GrSubtractCircle onClick={handleClickSubstrat}/>
                </div>
                <RiDeleteBin6Line className="delete"/>
            </div>
            <div>
                <p className="cart__prices">$174.00</p>
            </div>
        </div>
    )
}

export default Cart1