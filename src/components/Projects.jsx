function Projects({ projects }) {
  return (
    <section id="projects" className="section" tabIndex="-1">
      <div className="section-heading">
        <h2>Projects</h2>
        <p>Featured work with modern UI, hover interaction, and real-world IoT applications.</p>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.title} className="project-card">
            <span className="project-tag">{project.tag}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-list">
              {project.stack.map(tech => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
