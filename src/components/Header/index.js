import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';

function Header() {
    return (
        <header>
            <Logo />
            <h1 id="taylor-hakes">Taylor Hakes</h1>
            <Nav />
        </header>
    )
}

export default Header;