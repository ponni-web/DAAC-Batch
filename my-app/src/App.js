import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ContactInquiryForm from './components/ContactInquiryForm';
import AboutUs from './components/AboutUs';
import InternshipWorkshop from './components/Intenship&Workshop';
import StudentTestimonial from './components/StudentTestimonial';
import AdminDashboard from './components/AdminDashboard';
import CoursePage from './components/CoursePage';
import HomePage from './components/HomePage';

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
        <PageView page={activePage} darkMode={darkMode} setActivePage={setActivePage} />
      </main>
    </div>
  );
}

function PageView({ page, darkMode, setActivePage }) {
  if (page === 'home')         return <HomePage darkMode={darkMode} setActivePage={setActivePage} />;
  if (page === 'contact')      return <ContactInquiryForm darkMode={darkMode} />;
  if (page === 'about')        return <AboutUs darkMode={darkMode} />;
  if (page === 'internship')   return <InternshipWorkshop darkMode={darkMode} />;
  if (page === 'testimonials') return <StudentTestimonial darkMode={darkMode} />;
  if (page === 'admin')        return <AdminDashboard darkMode={darkMode} />;
  if (page === 'courses')      return <CoursePage darkMode={darkMode} />;

  return <HomePage darkMode={darkMode} setActivePage={setActivePage} />;
}

export default App;
