import React from "react";
import { Link } from 'react-router-dom';
import resume from '../../assets/files/resume.pdf';

function Resume() {
    const frontEndTechList = ['React', 'Redux',   'HTML5', 'CSS3', 'JavaScript ES6+', 'jQuery', 'Greensock Animation Platform', 'SVG', 'Responsive Design', 'Bootstrap', 'Mobile-first Design']

    const backEndTechList = ['Node.js', 'MongoDB', 'Express.js', 'REST APIs', 'GraphQL', 'Handlebars.js', 'SQL', 'Sequelize', 'NoSQL']

    return (
        <section id="resumeSection">
            <h2>
                <span className="palette3Span">M</span>.
                <span className="palette2Span">E</span>.
                <span className="palette4Span">R</span>.
                <span className="palette1Span">N</span>.
            </h2>

            <h3>- <span className="palette3Span">MongoDB</span>,
                <span className="palette2Span"> Express.js</span>,
                <span className="palette4Span"> React</span>,
                <span className="palette1Span"> Node.js</span> -
            </h3>

            <Link to={resume} target="_blank" download="Taylor_Hakes_Resume.pdf">
                <button id="resumeButton">Download Resume</button>
            </Link>

            <div className="techSection">
                <div className="proficiencyCard">
                    <h2>Front end proficiencies:</h2>
                    
                    <ul>
                        {frontEndTechList.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
    
                <div className="proficiencyCard">
                    <h2>Back end proficiencies:</h2>
                    <ul>
                        {backEndTechList.map(item => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;