import React from "react";

const NavBar = () => {
    return(
        <>
            <div className="heading">
                <p className="heading__content">Sign up and get 20% off for all new arrivals collections</p>
            </div>
            <div className="vector__container">
                <div className="vector"></div>
                <div className="vector"></div>
            </div>
            <nav>
                <div className="nav__container">
                    <ul className="nav__bar__persons">
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Collection</a></li>
                    </ul>
                    <div className="logo">
                        <img src="logo.png" alt="Logo" className="logo__content" />
                    </div>
                    <ul className="nav__bar__about">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#"><span><i class='bx bx-user'></i></span> Account</a></li>
                        <li><a href="#">Cart(0)</a></li>
                        <img src="sharch.png" alt="sharch-icon" />
                        <div className="sharch__basket">
                            <i class='bx bx-basket'></i>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar