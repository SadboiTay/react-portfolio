import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const { navSelection, setNavSelection } = props;

    return (
        <nav id='nav'>
            <ul>
                <Link to="/about">
                    <li
                        onClick={() => setNavSelection('about')}
                        className={`${navSelection === 'about' && 'aboutActive'}`}
                    >
                        About
                    </li>
                </Link>
                <Link to="/portfolio">
                    <li
                        onClick={() => setNavSelection('portfolio')}
                        className={`${navSelection === 'portfolio' && 'portfolioActive'}`}
                    >
                        Portfolio
                    </li>
                </Link>
                <Link to="/contact">
                    <li
                        onClick={() => setNavSelection('contact')}
                        className={`${navSelection === 'contact' && 'contactActive'}`}
                    >
                        Contact
                    </li>
                </Link>
                <Link to="/resume">
                    <li
                        onClick={() => setNavSelection('resume')}
                        className={`${navSelection === 'resume' && 'resumeActive'}`}
                    >
                        Resume
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;