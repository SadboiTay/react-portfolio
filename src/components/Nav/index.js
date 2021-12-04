import React from 'react';

function Nav(props) {
    const { navSelection } = props;

    return (
        <nav>
            <ul>
                <li>
                    <span className={`${navSelection === 'about' && 'aboutActive'}`}>About</span>
                </li>
                <li>
                    <span className={`${navSelection === 'portfolio' && 'portfolioActive'}`}>Portfolio</span>
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Resume
                </li>
            </ul>
        </nav>
    )
}

export default Nav;