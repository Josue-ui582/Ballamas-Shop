import React, {useState} from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiHandbagThin } from "react-icons/pi";


const NavBar = () => {
    // State herre

    const [isopen, setIsOpen] = useState(false)

    function toogleMenu() {
        setIsOpen(!isopen);
    }
    return(
        <>
            <div className="heading">
                <p className="heading__content">Sign up and get 20% off for all new arrivals collections</p>
            </div>
            <div className="vector__container" onClick={toogleMenu}>
                {isopen ? <IoMdClose /> : <HiMenuAlt4 />}
            </div>
            <nav className={isopen ? "vector__container" : "menu__display"} onClick={toogleMenu}>
                <div className="nav__container">
                    <ul className="nav__bar__persons">
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Collection</a></li>
                    </ul>
                    <div className="logo">
                        <img src="logo.png" alt="Logo" className="logo__content" />
                    </div>
                    <ul className="nav__bar__about">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#"><span><i class='bx bx-user'></i></span> Account</a></li>
                        <li><a href="#">Cart(0)</a></li>
                        <div className="sharch__basket">
                            <CiSearch className="search"/>
                            <PiHandbagThin className="bag"/>
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar