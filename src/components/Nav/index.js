import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const { navSelection, setNavSelection } = props;

    return (
        <nav id='nav'>
            <ul>
                <li>
                    <Link
                        to={'/about'}
                        onClick={() => setNavSelection('about')}
                        className={`${navSelection === 'about' && 'aboutActive'}`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/portfolio'}
                        onClick={() => setNavSelection('portfolio')}
                        className={`${navSelection === 'portfolio' && 'portfolioActive'}`}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/contact'}
                        onClick={() => setNavSelection('contact')}
                        className={`${navSelection === 'contact' && 'contactActive'}`}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to={'/resume'}
                        onClick={() => setNavSelection('resume')}
                        className={`${navSelection === 'resume' && 'resumeActive'}`}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;