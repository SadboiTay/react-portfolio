import React from 'react';
import PortalScene from '../PortalScene';
import { AboutQuote } from '../Quotes';

function About() {
    return (
        <section>
            <PortalScene />
            <a href="mailto:hello@taylorhakes.dev">
            <button className='ctaBtn'>Get In Touch</button>
            </a>
            <div className="about-text-wrap">
                <div className="about-text1">
                    I'm a full stack web developer and recent graduate from the Universty of Utah's coding bootcamp. My place in
                    the
                    world seems to be at the junction of creativity and logic.
                </div>
                <div className="about-text2">
                    If you're a hiring manager seeking quality developers, I'd love to hear about your opportunities. Send me an
                    email and let's get in touch.
                </div>
                <div className="about-text3">
                    Although I'm experienced in the full development life-cycle, I specialize on the client side with React, JavaScript, and CSS/Sass.
                </div>
                <div className="about-text4">
                    Outside the world of programming you might find me studying my favorite chess openings, entertaining my two
                    crazy doggos, traveling with my wife, jamming to my favorite dance music, or getting giddy over a large
                    plate of sushi.
                </div>
            </div>
            <AboutQuote />
        </section>
    )
}

export default About;