import React from 'react';
import NavbarCSS from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <section >
            <div className="container">
                <nav>
                    <ul className={NavbarCSS.navMenu}>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </nav>

            </div>
        </section>
    )
}
