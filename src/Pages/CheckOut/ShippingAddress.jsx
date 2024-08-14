import React from "react";

const ShippingAddress = () => {
    return(
        <>
            <h5 className="shipping__address">Shipping address</h5>
            <form action="#" className="get__user__id">
                <div className="user__name">
                    <div className="first__name">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" 
                            id="firstname"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>
                    <div className="last__name">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" 
                            id="lastname"
                            placeholder="Enter your last name"
                            required
                        />
                    </div>
                </div>

                <div className="user__id">
                    <div className="emai__address">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" 
                            id="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" 
                            id="phone"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                </div>

                <div className="user__address">
                    <div className="address">
                        <label htmlFor="adress">Address</label>
                        <input type="text" 
                            id="adress"
                            placeholder="Enter your adress"
                            required
                        />
                    </div>
                    <div className="city">
                        <label htmlFor="city">City</label>
                        <input type="text" 
                            id="city"
                            placeholder="City"
                            required
                        />
                    </div>
                </div>

                <div className="user__region">
                    <div className="region">
                        <label htmlFor="region">Region</label>
                        <input type="text" 
                            id="region"
                            placeholder="Select region"
                        />
                    </div>
                    <div className="postal__code">
                        <label htmlFor="postal">Postal code</label>
                        <input type="number" 
                            id="postal"
                            placeholder="Enter your postal code"
                            required
                        />
                    </div>
                </div>

            </form>
        </>
    )
}

export default ShippingAddress