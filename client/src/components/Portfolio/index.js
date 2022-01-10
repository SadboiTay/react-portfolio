import React from 'react';
import Project from '../Project';
import projects from '../Project/projects.json';

function Portfolio() {
    return (
        <section id="project-section">
            {projects.map((project) => (
                <Project 
                    title={project.title}
                    key={project.title}
                    techlist={project.techlist}
                    imageName={project.imageName}
                    laptop={project.laptop}
                    description={project.description}
                    deployed={project.deployed}
                    deployedLink={project.deployedLink}
                    repoLink={project.repoLink}
                />
            ))}
        </section>
    )
}

export default Portfolio;