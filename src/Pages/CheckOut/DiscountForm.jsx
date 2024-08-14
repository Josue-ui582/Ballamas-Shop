import React from "react";

const DiscountForm = () => {
    return(
        <>
            <form action="submit">
                <h5>Discount code</h5>
                <input type="text" placeholder="Add discount code" required/>
                <button>Apply</button>
                <p>New customer? <a href="#">Signup</a> to get better offer</p>
            </form>
        </>
    )
}

export default DiscountForm