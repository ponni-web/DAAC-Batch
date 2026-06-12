import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home',         label: 'Home',                  team: 'Team 1' },
  { id: 'about',        label: 'About Us',               team: 'Team 2' },
  { id: 'courses',      label: 'Courses',                team: 'Team 3' },
  { id: 'contact',      label: 'Contact & Inquiry',      team: 'Team 4' },
  { id: 'testimonials', label: 'Testimonials',           team: 'Team 5' },
  { id: 'internship',   label: 'Internship & Workshop',  team: 'Team 6' },
  { id: 'admin',        label: 'Insight',                team: 'Team 7' },
];

// Strips the white background from a PNG/SVG at runtime using canvas pixel processing.
function useTransparentLogo(src) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!src) { setResult(null); return; }
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        const mx  = Math.max(d[i], d[i + 1], d[i + 2]);
        const mn  = Math.min(d[i], d[i + 1], d[i + 2]);
        const sat = mx === 0 ? 0 : (mx - mn) / mx;   // 0 = grey/white, 1 = vivid colour
        const bri = mx / 255;                          // 0 = black, 1 = white
        // Only touch bright, unsaturated (white/near-white) pixels
        if (bri > 0.90 && sat < 0.10) {
          // Fade out: fully white → alpha 0, brightness 0.90 → alpha 255
          d[i + 3] = Math.round(Math.max(0, (1 - bri) / 0.10 * 255));
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setResult(canvas.toDataURL('image/png'));
    };
    img.src = src;
  }, [src]);

  return result;
}

function Navbar({ activePage, setActivePage, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const transparentDarkLogo = useTransparentLogo(darkMode ? '/kmhr-logo-dark.png' : null);

  const handleNavClick = (id) => {
    setActivePage(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-brand">
        <div className="brand-logo-wrap">
          <img
            src={darkMode ? (transparentDarkLogo || '/kmhr-logo-dark.png') : '/kmhr-logo-dark.png'}
            className="brand-logo"
            alt="KMHR Logo"
          />
        </div>
        <div className="brand-name">
          <span className="brand-name-main">IT Job Training Center</span>
          <span className="brand-name-sub">Learn &bull; Code &bull; Succeed</span>
        </div>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-btn ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              title={item.team}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          // Sun — switch to light
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="toggle-svg">
            <circle cx="12" cy="12" r="4.5" fill="#FFD600" />
            <line x1="12" y1="2"  x2="12" y2="5"  stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="19" x2="12" y2="22" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="2"  y1="12" x2="5"  y2="12" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="19" y1="12" x2="22" y2="12" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4.93"  y1="4.93"  x2="7.05"  y2="7.05"  stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4.93"  y1="19.07" x2="7.05"  y2="16.95" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
            <line x1="16.95" y1="7.05"  x2="19.07" y2="4.93"  stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          // Moon — switch to dark
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="toggle-svg">
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              fill="#0d47a1"
              stroke="#0d47a1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
export { NAV_ITEMS };
