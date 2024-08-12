import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiHandbagThin } from "react-icons/pi";
import { useState } from "react";


function NavBar(){
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu(){
        setIsOpen(!isOpen)
    }
    
    return(
        <>
            <div className="heading">
                <p className="heading__content">Sign up and get 20% off for all new arrivals collections</p>
            </div>
            <div className="vector__container" onClick={toggleMenu}>
                {isOpen ? <IoMdClose className="close" /> : <HiMenuAlt4 />}
            </div>
            <nav>
                <div className={`nav__container ${isOpen ? 'open' : 'closed'}`}>
                    <ul className="nav__bar__persons">
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Collection</a></li>
                    </ul>
                    <ul className="nav__bar__about">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#"><span><i class='bx bx-user'></i></span> Account</a></li>
                        <li><a href="#">Cart(0)</a></li>
                    </ul>
                </div>
            </nav>
            <div className="logo">
                <img src="logo.png" alt="Logo" className="logo__content" />
            </div>
            <div className="sharch__basket">
                <CiSearch className="search"/>
                <PiHandbagThin className="bag"/>
            </div>
        </>
    )
}

export default NavBar