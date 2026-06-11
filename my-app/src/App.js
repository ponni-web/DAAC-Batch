import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContactInquiryForm from './components/ContactInquiryForm';
import AboutUs from './components/AboutUs';
import InternshipWorkshop from './components/Intenship&Workshop';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="page-content">
        <PageView page={activePage} darkMode={darkMode} />
      </main>
    </div>
  );
}

function PageView({ page, darkMode }) {
  if (page === 'contact') {
    return <ContactInquiryForm darkMode={darkMode} />;
  }

  if (page === 'about') {
    return <AboutUs darkMode={darkMode} />;
  }
  if (page === 'internship') {
    return <InternshipWorkshop darkMode={darkMode} />;
  }

  const pages = {
    home:         { team: 'Team 1', title: 'Home Page' },
    about:        { team: 'Team 2', title: 'About Us Page' },
    courses:      { team: 'Team 3', title: 'Courses Page' },
    testimonials: { team: 'Team 5', title: 'Student Testimonial Section' },
    internship:   { team: 'Team 6', title: 'Internship & Workshop Page' },
    admin:        { team: 'Team 7', title: 'Admin Dashboard UI' },
  };

  const current = pages[page];

  return (
    <div className={`placeholder-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="placeholder-card">
        <span className="placeholder-team">{current.team}</span>
        <h1 className="placeholder-title">{current.title}</h1>
        <p className="placeholder-desc">
          This section is being built by <strong>{current.team}</strong>.<br />
          The component will be integrated here.
        </p>
      </div>
    </div>
  );
}

export default App;
