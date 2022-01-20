import React from 'react';

function Project(props) {
    const {
        title,
        techlist,
        imageName,
        laptop,
        description,
        deployed,
        deployedLink,
        repoLink
    } = props;

    return (
        <div className="project-card">
            <div className="project-content">
                <div>
                    <h2 className="project-title">{title}</h2>
                    <h3 className="project-techlist">{techlist}</h3>
                </div>
                <div className="project-body">
                    <div className="project-img-wrap">
                        <a
                            href={deployedLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className={`mockup ${laptop && 'laptopMockup'}`}
                                src={require(`../../assets/images/mockups/${imageName}.png`).default}
                                alt={title}
                                key={title}
                            />
                        </a>
                    </div>
                    <div className="project-description">
                        {description}
                    </div>
                </div>
                <div className="project-footer">
                    {deployed &&
                        <a href={deployedLink} target="_blank" rel="noreferrer">
                            Visit Website
                        </a>
                    }
                    <a href={repoLink} target="_blank" rel="noreferrer">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default Project;