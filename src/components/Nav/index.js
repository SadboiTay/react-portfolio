import React from 'react';

function Nav(props) {
    const { navSelection, setNavSelection } = props;

    return (
        <nav>
            <ul>
                <li>
                    <span 
                        onClick={() => setNavSelection('about')} 
                        className={`${navSelection === 'about' && 'aboutActive'}`}>
                            About
                    </span>
                </li>
                <li>
                    <span 
                        onClick={() => setNavSelection('portfolio')} 
                        className={`${navSelection === 'portfolio' && 'portfolioActive'}`}>
                            Portfolio
                    </span>
                </li>
                <li>
                <span 
                        onClick={() => setNavSelection('contact')} 
                        className={`${navSelection === 'contact' && 'contactActive'}`}>
                            Contact
                    </span>
                </li>
                <li>
                <span 
                        onClick={() => setNavSelection('resume')} 
                        className={`${navSelection === 'resume' && 'resumeActive'}`}>
                            Resume
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;