import React from 'react';
import PortalScene from '../PortalScene';

function About() {
    return (
        <section>
            <PortalScene />
            <button className='ctaBtn'>Get In Touch</button>
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
                    I am proficient with a range of front and back-end languages, tools and frameworks like HTML5, CSS3,
                    JavaScript,
                    jQuery, Node.js, Bootstrap, SQL, Express.js, MongoDB, and React.
                </div>
                <div className="about-text4">
                    Outside the world of programming you might find me studying my favorite chess openings, entertaining my two
                    crazy doggos, traveling with my wife, jamming to my favorite dance music, or getting giddy over a large
                    plate of sushi.
                </div>
            </div>
        </section>
    )
}

export default About;