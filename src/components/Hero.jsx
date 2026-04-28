import { useEffect, useState } from 'react';

const roles = ['Software Engineering Student', 'Java Developer', 'IoT Enthusiast'];

function Hero({ onButtonClick }) {
  const [displayed, setDisplayed] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    let charIndex = 0;
    let direction = 'forward';

    const interval = setInterval(() => {
      if (direction === 'forward') {
        setDisplayed(role.slice(0, charIndex + 1));
        charIndex += 1;
        if (charIndex > role.length) {
          direction = 'backward';
          setTimeout(() => {}, 500);
        }
      } else {
        setDisplayed(role.slice(0, charIndex - 1));
        charIndex -= 1;
        if (charIndex === 0) {
          direction = 'forward';
          setCurrentRole(prev => (prev + 1) % roles.length);
        }
      }
    }, typing ? 120 : 10);

    return () => clearInterval(interval);
  }, [currentRole, typing]);

  return (
    <section id="home" className="section hero" tabIndex="-1">
      <div className="hero-card">
        <div className="hero-top">
          <div>
            <p className="hero-subtitle">Software Engineering Student</p>
            <h1 className="hero-title">Hi, I'm Kaif Shaikh.</h1>
          </div>
          <div className="hero-badge">Java Developer · IoT Enthusiast</div>
        </div>
        <p className="hero-copy">
          I build polished software and connected hardware experiences. My portfolio showcases modern IoT solutions, Java applications, and thoughtful engineering design.
        </p>
        <div className="typewriter">
          <span>{displayed}</span>
          <span className="cursor">|</span>
        </div>
        <div className="hero-cta">
          <button className="button" type="button" onClick={() => onButtonClick('projects')}>
            View Projects
          </button>
          <button className="button-secondary" type="button" onClick={() => onButtonClick('contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
