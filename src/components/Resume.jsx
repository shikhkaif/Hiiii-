function Resume() {
  return (
    <section id="resume" className="section" tabIndex="-1">
      <div className="section-heading">
        <h2>Resume</h2>
        <p>Get a polished overview of my background, experience, and technical strengths.</p>
      </div>
      <div className="resume-grid">
        <div className="resume-card">
          <div>
            <h3 className="resume-title">Ready to share</h3>
            <p className="resume-copy">
              My resume includes academic projects, IoT prototypes, and Java development experience. Download the placeholder version below and replace it with your finalized resume when ready.
            </p>
          </div>
          <div className="resume-actions">
            <a className="button" href="#" role="button">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
