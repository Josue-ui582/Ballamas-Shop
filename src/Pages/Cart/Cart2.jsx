import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { GrSubtractCircle } from "react-icons/gr";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart2 = () => {

    // State start here

    const [more, setMore] = useState(1)

    function handleClickMore() {
        setMore(more + 1)
    }
    function handleClickSubstrat() {
        setMore(more - 1)
    }

    return(
        <div className="product__cart1">
            <div className="cart1__details">
                <img src="cart2.png" alt="cart__2" />
                <div>
                    <h6>Men's Dri-FIT Golf Jacket</h6>
                    <p className="cart__type">Ocean - Large</p>
                    <p className="cart__price">$100</p>
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
                <p className="cart__prices">$100.00</p>
            </div>
        </div>
    )
}

export default Cart2