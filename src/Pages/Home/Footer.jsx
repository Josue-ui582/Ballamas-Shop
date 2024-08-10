import React from "react";
import FooterService from "./FooterService";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <div className="footer__section">
                <div className="footer__subscribe__section">
                    <img src="logo-2.png" alt="logo" className="footer__logo" />
                    <form action="#">
                        <p className="form__p">Subscribe to our newsletter  for upcoming products and best discount for all items</p>
                        <div className="subscribetion">
                            <input type="email" placeholder="Your email" required/>
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
                <FooterService />
            </div>
            <p className="copy__right">© BALLAMAS 2024 by <Link>Josué</Link></p>
        </footer>
    )
}

export default Footer