import React from 'react'
import { useState } from 'react';
import './navbar.css'
function Navbar() {

    const [close, setClose] = useState(false)


    function openCloseBtn() {
        if (close) {
            return 'menu close'
        }
        return 'menu';
    }

    function showHideNavLinks() {
        if (close) {
            return 'nav-links display'
        }
        return 'nav-links'
    }

    function handleMenuClicked(e) {
        setClose(!close)
    }

    return (
        <nav className='navbar'>
            <div className='nav-brand'>
                <div>
                    <h1>Electropia</h1>
                    <small>Hello Abebe</small>
                </div>
                <div id='menu' className={openCloseBtn()} onClick={handleMenuClicked}>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </div>
            </div>

            <ul className={showHideNavLinks()}>
                <li>Home</li>
                <li>Cart</li>
                <li>Sign In</li>
            </ul>

            <form className='nav-search'>
                <input type='text' />
                <button className='nav-search-btn'><i className="fas fa-search"></i></button>
            </form>

        </nav>
    )
}

export default Navbar
