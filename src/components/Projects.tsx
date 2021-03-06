import React, { useContext } from 'react';
import PortfolioContext from '../context/context';
import { getIcon } from '../utils';
import ProjectImg from './Image/ProjectImg';

const GithubIcon = getIcon('github');

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
      {projects.map((project) => {
        const { title, info, url, repo, img } = project;

        return (
          <a
            key={url}
            href={url || '#!'}
            target="_blank"
            aria-label="Project Link"
            rel="noopener noreferrer"
            className="project-wrapper"
          >
            <div className="project">
              <ProjectImg className="project-image" alt={title} filename={img} />
              <div className="project-over project-info-overlay"></div>
              <div className="project-over project-info">
                <div>
                  <div className="project-title">{title}</div>
                  <div className="project-description">{info}</div>
                </div>
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    aria-label="Project repo link"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="icon" />
                  </a>
                )}
              </div>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default Projects;
