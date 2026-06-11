import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import StudentTestimonial from './components/StudentTestimonial';
import AdminDashboard from './components/AdminDashboard';

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
  if (page === 'testimonials') {
    return <StudentTestimonial darkMode={darkMode} />;
  }

  if (page === 'admin') {
    return <AdminDashboard darkMode={darkMode} />;
  }

  const pages = {
    home:         { team: 'Team 1', title: 'Home Page' },
    about:        { team: 'Team 2', title: 'About Us Page' },
    courses:      { team: 'Team 3', title: 'Courses Page' },
    contact:      { team: 'Team 4', title: 'Contact & Inquiry Form' },
    internship:   { team: 'Team 6', title: 'Internship & Workshop Page' },
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
