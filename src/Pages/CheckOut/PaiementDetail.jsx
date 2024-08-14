import React from "react";
import ShippingAddress from "./ShippingAddress";
import SelectPaiementOption from "./SelectPaiementOption";

const PaiementDetail = () => {
    return(
        <>
           <div>
                <h4>Payment Details</h4>
                <p>Complete your purchase by providing your payment details.</p>
           </div>
           <div>
                <ShippingAddress />
           </div>
           <div className="select__payment">
                <SelectPaiementOption />
           </div>
        </>
    )
}

export default PaiementDetail