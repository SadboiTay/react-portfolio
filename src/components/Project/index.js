import React from 'react';
import projects from './projects.json';

function Project() {
    return (
        <section id="project-section">
            {projects.map((project) => (
                <div className="project-card">
                    <div className="project-content">
                        <h2 className="project-title">{project.title}</h2>
                        <h3 className="project-techlist">{project.techlist}</h3>
                        <div className="project-body">
                            <div className="project-img-wrap">
                                <img
                                    className={`mockup ${project.laptop && 'laptopMockup'}`}
                                    src={require(`../../assets/images/mockups/${project.imageName}.png`).default} 
                                    alt={project.title}
                                    key={project.name}
                                />
                            </div>
                            <div className="project-description">
                                {project.description}
                            </div>
                        </div>
                        <div className="project-footer">
                            {project.deployed && 
                                <span>
                                    <a href={project.deployedLink} target="_blank" rel="noreferrer">
                                        Visit Website
                                    </a>
                                    <span> // </span>
                                </span>
                            }
                            <a href={project.repoLink} target="_blank" rel="noreferrer">View Code</a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Project;