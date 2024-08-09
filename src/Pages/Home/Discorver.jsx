import React from "react";
import DiscorverHeader from "../../Components/DiscorverHeader";
import DiscorverSection from "../../Components/DiscorverSection";
import Product from "../../Components/Products";

const Discorver = () => {
    return(
        <section className="discorver_section">
            <DiscorverHeader />
            <DiscorverSection />
            <Product />
        </section>
    )
}

export default Discorver