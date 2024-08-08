import React from "react";
import data from "../../src/Data/index.json"
import { Link } from "react-router-dom";

const Product = () => {
    return(
        <div className="products">
            <div className="product">
                {data?.product?.map((item, index) => (
                    <div key={index} className="product__content">
                        <div>
                            <img src={item.src} alt="product__image" />
                            <div className="product__detail">
                                <p className="product__title">{item.title}</p>
                                <p className="product__price">{item.price}</p>
                            </div>
                            <Link to={'/'} className="reduction">{item.reduction}</Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view__more">View More</button>
        </div>
    )
}

export default Product