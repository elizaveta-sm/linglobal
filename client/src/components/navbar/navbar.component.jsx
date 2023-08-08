import { useState } from 'react';
import './navbar.styles.scss';

const Navbar = () => {

    const [isActive, setIsActive] = useState('false');
    
    const handleToggle = () => {
        setIsActive(!isActive)
    };

    return (
        <header>
            <div className="header-left">
                <div className="logo">
                    <img src="assets/logo.png" alt="logo" />
                </div>
                <nav className={isActive ? 'active' : null}>
                    <ul>
                        <li>
                            <a href="" className="active">How it works</a>
                        </li>
                        <li>
                            <a href="">Find a tutor</a>
                        </li>
                        <li>
                            <a href="">Become a tutor</a>
                        </li>
                        <li>
                            <a href="">FAQs</a>
                        </li>
                        <li>
                            <a href="">About Us</a>
                        </li>
                    </ul>
                    <div className="login-signup">
                        <a href="">Login</a> or <a href="">Signup</a>
                    </div>
                </nav>
            </div>
            <div className="header-right">
                <div className="login-signup">
                    <a href="">Login</a> or <a href="">Signup</a>
                </div>
                <div className="hamburger" onClick={handleToggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;