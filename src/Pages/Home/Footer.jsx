import React from "react";
import FooterService from "./FooterService";

const Footer = () => {
    return(
        <footer>
            <div className="footer__section">
                <div className="footer__subscribe__section">
                    <img src="logo-2.png" alt="logo" className="footer__logo" />
                    <form action="#">
                        <p className="form__p">Subscribe to our newsletter  for upcoming products and best discount for all items</p>
                        <div className="subscribetion">
                            <input type="email" placeholder="Your email"/>
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className="footer__service__section">
                    <FooterService />
                </div>
                </div>
        </footer>
    )
}

export default Footer