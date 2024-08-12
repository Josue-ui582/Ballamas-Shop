import React from "react"
import { Link } from "react-router-dom";

const Product = () => {
    return(
        <>
            <div className="product__section">
                <div className="product__container">
                    <img src="Frame 28.png" alt="" />
                    <div className="product__card">
                        <p className="product__container__detail">SUMMER SHIRT</p>
                        <p className="product__container__price">$99</p>
                    </div>
                </div>

                <div className="product__container">
                    <img src="Frame 28.png" alt="" />
                    <div className="product__card">
                        <p className="product__container__detail">SUMMER SHIRT</p>
                        <p className="product__container__price">$99</p>
                    </div>
                </div>

                <div className="product__container">
                    <img src="picture.png" alt="" />
                    <div className="product__card">
                        <p className="product__container__detail">SUMMER SHIRT</p>
                        <p className="product__container__price">$99</p>
                    </div>
                </div>

                <div className="product__container">
                    <img src="Frame 28.png" alt="" />
                    <div className="product__card">
                        <p className="product__container__detail">SUMMER SHIRT</p>
                        <p className="product__container__price">$99</p>
                    </div>
                </div>

                <div className="product__container">
                    <img src="Frame 27.png" alt="" />
                    <div className="product__card">
                        <p className="product__container__detail">SUMMER SHIRT</p>
                        <p className="product__container__price">$99</p>
                    </div>
                </div>

                <div className="product__container">
                    <img src="Frame 28.png" alt="" />
                    <div className="product__card">
                        <p className="product__container__detail">SUMMER SHIRT</p>
                        <p className="product__container__price">$99</p>
                    </div>
                </div>
            </div>
            <Link to="Producte" className="view__more">View More</Link>
        </>
    )
}

export default Product