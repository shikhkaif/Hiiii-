function Skills({ skills }) {
  return (
    <section id="skills" className="section" tabIndex="-1">
      <div className="section-heading">
        <h2>Skills</h2>
        <p>Technologies, frameworks, and problem-solving strengths.</p>
      </div>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-card">
            <h3 className="skill-card-title">{skill.name}</h3>
            <div className="skill-progress">
              <div className="progress-label">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
