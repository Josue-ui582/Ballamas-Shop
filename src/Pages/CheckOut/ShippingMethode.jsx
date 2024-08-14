import React from "react";
import { useState } from "react";

const ShippingMethode = () => {
    // State start here
    const [selectedOption, setSelectOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectOption(e.target.value)
    }
    return(
        <>
            <h4>Shipping method</h4>
            <form>
                <div className="option">
                    <input 
                        type="radio"
                        id="freeshipping"
                        name="shipping"
                        value="free"
                        checked={selectedOption === "free"}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="freeShipping">
                        <div className="option__info">
                            <span className="option__title">Free shipping</span>
                            <span className="option__time">7-30 business days</span>
                        </div>
                        <span className="option__price">$0</span>
                    </label>
                </div>

                <div className="option">
                    <input
                    type="radio"
                    id="regularShipping"
                    name="shipping"
                    value="regular"
                    checked={selectedOption === 'regular'}
                    onChange={handleOptionChange}
                    />
                    <label htmlFor="regularShipping">
                    <div className="option__info">
                        <span className="option__title">Regular shipping</span>
                        <span className="option__time">3-14 business days</span>
                    </div>
                    <span className="option__price">$7.50</span>
                    </label>
                </div>

                <div className="option">
                    <input
                    type="radio"
                    id="expressShipping"
                    name="shipping"
                    value="express"
                    checked={selectedOption === 'express'}
                    onChange={handleOptionChange}
                    />
                    <label htmlFor="expressShipping">
                    <div className="option__info">
                        <span className="option__title">Express shipping</span>
                        <span className="option__time">1-3 business days</span>
                    </div>
                    <span className="option__price">$22.50</span>
                    </label>
                </div>
            </form>
        </>
    )
}

export default ShippingMethode