import { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

const sectionIds = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];

const projectData = [
  {
    title: 'Mobile Controlled LED',
    description: 'A Bluetooth-powered LED control system with a polished mobile interface for lighting automation.',
    stack: ['Bluetooth', 'Arduino', 'Mobile'],
    tag: 'Bluetooth',
  },
  {
    title: 'Temperature Display',
    description: 'Live temperature monitoring with Blynk and NodeMCU, providing easy remote access from mobile devices.',
    stack: ['Blynk', 'NodeMCU', 'IoT'],
    tag: 'Blynk',
  },
  {
    title: 'Clap ON/OFF Light',
    description: 'Interactive clap detection lighting with a mobile override for flexible home automation.',
    stack: ['Sound Sensor', 'Automation', 'Mobile'],
    tag: 'Automation',
  },
  {
    title: 'Gas & Smoke Detector',
    description: 'Safety-focused detection with fast alerts for gas and smoke events using embedded sensors.',
    stack: ['MQ-2', 'Arduino', 'Safety'],
    tag: 'Safety',
  },
  {
    title: 'Smart Parking System',
    description: 'Sensor-driven parking assistant to track availability and support efficient parking management.',
    stack: ['Ultrasonic', 'Control Logic', 'Embedded'],
    tag: 'Parking',
  },
  {
    title: 'Smart Plant Watering System',
    description: 'Automated irrigation based on moisture sensing, designed to keep plants healthy with minimal effort.',
    stack: ['Soil Sensor', 'Actuators', 'Automation'],
    tag: 'Green Tech',
  },
];

const skillData = [
  { name: 'Java', level: 92 },
  { name: 'C', level: 88 },
  { name: 'Python (Basic)', level: 70 },
  { name: 'Arduino', level: 85 },
  { name: 'NodeMCU', level: 82 },
  { name: 'Blynk', level: 78 },
  { name: 'DSA', level: 80 },
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-32% 0px -45% 0px',
        threshold: 0.25,
      }
    );

    sectionIds.forEach(id => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = id => {
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app-shell">
      <Navbar
        sections={sectionIds}
        activeSection={activeSection}
        onLinkClick={handleScrollTo}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(prev => !prev)}
      />
      <main>
        <Hero onButtonClick={handleScrollTo} />
        <About />
        <Skills skills={skillData} />
        <Projects projects={projectData} />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
