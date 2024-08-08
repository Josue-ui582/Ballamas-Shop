import React from "react";

const Header = () => {
    return(
        <header className="header__section">
            <div className="header__content">
                    <div className="separator">
                        <div className="separator__content"></div>
                        <p className="separator-p">We bring new fashion to the world</p>
                        <div className="separator__content"></div>
                    </div>
                <div className="header__content__title">
                    <p className="header__content__title__content">DISCOVER THE LATEST FASHION TRENDS HERE</p>
                </div>
                <div className="discorver">
                    <p className="discorver__detail">Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.</p>
                </div>
                <div className="header__content__buttons">
                    <button className="header__content__button">Start shopping</button>
                    <button className="header__content__buttone"><img src="Vector.png" alt="" /></button>
                </div>
            </div>
        </header>
    )
}

export default Header