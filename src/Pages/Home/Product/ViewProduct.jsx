import React from "react";
import ProductLike from "./ProductLike";

const ViewProduct = () => {
    return(
        <section>
            <p className="product__like__title">You may also like</p>
            <div className="product__like">
                <ProductLike />
                <ProductLike />
                <ProductLike />
                <ProductLike />
            </div>
        </section>
    )
}

export default ViewProduct