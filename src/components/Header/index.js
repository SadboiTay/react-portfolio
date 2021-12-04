import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';

function Header(props) {
    const { navSelection } = props;

    return (
        <header>
            <Logo />
            <h1 id="taylor-hakes">Taylor Hakes</h1>
            <Nav
                navSelection={navSelection}
            />
        </header>
    )
}

export default Header;