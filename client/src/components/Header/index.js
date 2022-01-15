import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

function Header(props) {
    const { navSelection, setNavSelection } = props;

    return (
        <header>
            <div className='brandWrap'>
                <div className='headerLogo'>
                    <Link
                        to={"/react-portfolio"}
                        onClick={() => setNavSelection('about')}
                    >
                        <Logo
                            color={'--white'}
                        />
                    </Link>
                </div>
                <Link
                    to={"/react-portfolio"}
                    onClick={() => setNavSelection('about')}
                >
                    <h1 id="taylor-hakes">Taylor Hakes</h1>
                </Link>
            </div>
            <Nav
                navSelection={navSelection}
                setNavSelection={setNavSelection}
            />
        </header>
    )
}

export default Header;