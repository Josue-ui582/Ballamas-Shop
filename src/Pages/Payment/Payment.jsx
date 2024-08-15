import React from "react";
import { GrDocumentVerified } from "react-icons/gr";
import "./Payment.css"
import Footer from "../Home/Footer"

const Payment = () => {
    return(
        <section>
            <div className="payment__section">
                <GrDocumentVerified />
                <p className="thanks__message">Thanks for your order !</p>
                <p className="confirmation__sent">The order confirmation has been sent to johndoe@gmail.com</p>
            </div>

            <Footer />
        </section>
    )
}

export default Payment