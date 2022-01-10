import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const { navSelection, setNavSelection } = props;

    return (
        <nav id='nav'>
            <ul>
                <li
                    onClick={() => setNavSelection('about')}
                    className={`${navSelection === 'about' && 'aboutActive'}`}
                >
                    About
                </li>
                <li
                    onClick={() => setNavSelection('portfolio')}
                    className={`${navSelection === 'portfolio' && 'portfolioActive'}`}
                >
                    Portfolio
                </li>
                <li
                    onClick={() => setNavSelection('contact')}
                    className={`${navSelection === 'contact' && 'contactActive'}`}
                >
                    Contact
                </li>
                <li
                    onClick={() => setNavSelection('resume')}
                    className={`${navSelection === 'resume' && 'resumeActive'}`}
                >
                    Resume
                </li>
            </ul>
        </nav>
    )
}

export default Nav;