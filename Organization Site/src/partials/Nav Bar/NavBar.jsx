import React, { useState } from 'react';
import './NavBar.css'

function NavBar() {

    // mobile version responsive code
    const NavBar = document.querySelector('.NavBar');
    const MobileNavBar = document.querySelector('.Mobile-NavBar');

    // Sticky Nav bar code
    const nav = document.querySelector("nav");
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add("hide");
        } else {
            nav.classList.remove("hide");
        }
        lastScrollY = window.scrollY;
    });
    // State variable to track whether menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle menu state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (

        <div>
            <nav className={`NavBar ${menuOpen ? "menu-open" : ""}`}>
                <div className="Logo">
                    <span><strong>Lieben</strong> Logistics</span>
                </div>

                <ul className="links">
                    <li><a href="#Featured">Upcoming Projects</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Contact">Contact Us</a></li>
                </ul>
                <ul>
                    <button className="menu-button" onClick={toggleMenu}>Menu</button>

                </ul>

                <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
                    <div className="links-dropdown">
                        <button className="drop-link"><a href="#Featured">Upcoming Projects</a></button>
                        <button className="drop-link"><a href="#About">About</a></button>
                        <button className="drop-link"><a href="#Portfolio">Portfolio</a></button>
                        <button className="drop-link"><a href="#Contact">Contact Us</a></button>
                    </div>

                </div>

            </nav>

        </div>
    );
}

export default NavBar;
