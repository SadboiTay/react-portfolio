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
                <h2 className="project-title">{title}</h2>
                <h3 className="project-techlist">{techlist}</h3>
                <div className="project-body">
                    <div className="project-img-wrap">
                        <img
                            className={`mockup ${laptop && 'laptopMockup'}`}
                            src={require(`../../assets/images/mockups/${imageName}.png`).default}
                            alt={title}
                            key={title}
                        />
                    </div>
                    <div className="project-description">
                        {description}
                    </div>
                </div>
                <div className="project-footer">
                    {deployed &&
                        <span>
                            <a href={deployedLink} target="_blank" rel="noreferrer">
                                Visit Website
                            </a>
                            <span> // </span>
                        </span>
                    }
                    <a href={repoLink} target="_blank" rel="noreferrer">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default Project;