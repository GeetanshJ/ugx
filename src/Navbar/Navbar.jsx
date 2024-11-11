import React from 'react'
import title_img from "../Navbar/logo.png";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMoon, faBell, faGear } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left-side-navbar">
                <img src={title_img} alt="img" />
                <div className="title">Power Analytics</div>
            </div>

            <div className="center-side-navbar">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input className='search-bar' type='text' placeholder='search' />
            </div>

            <div className="right-side-navbar">
                <div className="user">
                    <div className="green-dot">.</div>
                    <div className="user-name">Geetansh Jain</div>
                </div>
                
                <div className="icons">
                    <div className="moon">
                        <FontAwesomeIcon icon={faMoon} />
                    </div>
                    <div className="bell">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="gear">
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
