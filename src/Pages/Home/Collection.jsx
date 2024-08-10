import React from "react";

const Collection = () => {
    return(
        <section className="collection">
            <div className="collection__section">
                <div className="collection__header">
                    <h1 className="collection__header__h1">OUR COLLECTION</h1>
                    <p className="collection__header_p">Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
                </div>
                <div className="collection__content">
                    <img src="techmen.png" alt="techman" />
                    <div className="collection__classic__section"><img src="Frame 41.png" alt="" className="classic"/></div>
                </div>
            </div>
        </section>
    )
}

export default Collection