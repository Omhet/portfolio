import React, { useContext } from 'react';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <div className="project-wrapper">
        <Title title="Projects" />
        {projects.map((project) => {
          const { title, info, url, repo, img, id } = project;

          return (
            <div key={id} className="project-wrapper__image">
              <a
                href={url || '#!'}
                target="_blank"
                aria-label="Project Link"
                rel="noopener noreferrer"
              >
                <div data-tilt className="thumbnail rounded">
                  <ProjectImg alt={title} filename={img} />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
