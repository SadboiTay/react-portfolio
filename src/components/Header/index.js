import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';

function Header(props) {
    const { navSelection, setNavSelection } = props;

    return (
        <header>
            <div className='brandWrap'>
                <Logo />
                <h1 id="taylor-hakes">Taylor Hakes</h1>
            </div>
            <Nav
                navSelection={navSelection}
                setNavSelection={setNavSelection}
            />
        </header>
    )
}

export default Header;