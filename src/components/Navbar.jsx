function Navbar({ sections, activeSection, onLinkClick, darkMode, onToggleDarkMode }) {
  return (
    <header className="container navbar">
      <div className="navbar-brand">
        <span>Kaif</span> Shaikh
      </div>
      <nav className="nav-links">
        {sections.map(section => (
          <button
            key={section}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={() => onLinkClick(section)}
            type="button"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
        <button className="toggle-button" type="button" onClick={onToggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
