import React from "react";
import "./CheckOut.css"
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import DiscountForm from "./DiscountForm";
import Subtotal from "./Subtotal";
import ShippingMethode from "./ShippingMethode";
import Footer from "../Home/Footer"
import PaiementDetail from "./PaiementDetail";

const CheckOut = () => {
    return(
        <>
            <div>
                <section className="checkout__section">
                    <div >
                        <h5>Chechout</h5>
                        <div className="checkout__start">
                                <div className="checkout__start__1">
                                    <div>
                                        <h5>Your Order</h5>
                                        <p>By placing your order, you agree to Ballamas <a href="#" className="lien">Privacy</a> and <a href="#" className="lien">Policy</a> .</p>
                                    </div>
                                    <div>
                                        <Product1 />
                                        <Product2 />
                                        <Product3 />
                                    </div>
                                    <div className="discount">
                                        <DiscountForm />
                                    </div>
                                    <div className="subtotal">
                                        <Subtotal />
                                    </div>
                                    <div className="shipping__methode">
                                        <ShippingMethode />
                                    </div>
                                </div>
                                <div className="checkout__start__2">
                                    <PaiementDetail />
                                </div>
                        </div>
                    </div>
                </section>
                <div className="checkout__footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default CheckOut