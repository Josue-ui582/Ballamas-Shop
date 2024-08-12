import React from "react";
import './Product.css'

const ProductDetails = () => {
    return(
        <section className="details">
            <div className="Product__detail__section">
                    <img src="Rectangle 5.png" alt="produit" />
                <div className="product__detail">
                    <div className="caracteristic">
                        <p className="product__carateristic">Badacore Tshirt</p>
                        <p className="product__carateristic__price">CAD $80 </p>
                        <div className="color">
                            <span>Color: </span>
                            <span>Green</span>
                            <div>
                                <div className="green"></div>
                                <div className="purple"></div>
                                <div className="ocean"></div>
                                <div className="olive"></div>
                            </div>
                        </div>
                        <div className="size">
                            <p>Size:</p>
                            <div>
                                <div>XS</div>
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                            </div>
                        </div>
                        <div className="achat">
                            <button>BUY NOW</button>
                            <button>ADD TO CART</button>
                        </div>
                        <div className="description">
                            <h1>Description</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails