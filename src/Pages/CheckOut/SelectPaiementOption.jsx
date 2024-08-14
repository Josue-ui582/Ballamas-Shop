import React from "react";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

const SelectPaiementOption = () => {
    const [show, setShow] = useState(false)

    const handleShow = () =>{
        setShow(!show)
    }
    return(
        <>
            <div>
                <h4>Select payment methode</h4>
                <div className="card">
                    <div>
                        <FaRegCreditCard />
                        <p>Debit / Credit Card</p>
                    </div>
                    <div>
                        <MdAccountBalance />
                        <p>Virtual account</p>
                    </div>
                </div>
                <div className="card__number">
                    <input type="password" placeholder="Card number" />
                        <span onClick={handleShow} className="password__line">
                            {show ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />
                            }
                        </span>
                </div>
                <div className="card__info">
                        <input type="text" placeholder="Expiration date (MM/YY)"/>
                        <input type="number" placeholder="Security code"/>
                </div>
                <input type="radio" id="radion"/>
                <label htmlFor="radion">Use shipping address as billing address</label>
            </div>
           <button><a href="">Pay $524.00 <GrFormNextLink /></a></button>
        </>
    )
}

export default SelectPaiementOption