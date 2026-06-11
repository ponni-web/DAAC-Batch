import React from 'react';
import './HomePage.css';

function HomePage({ darkMode }) {
  const quickFeatures = [
    { icon: 'code', label: 'Daily coding tasks' },
    { icon: 'responsive', label: 'Responsive web design' },
    { icon: 'form', label: 'Form validation' },
    { icon: 'layout', label: 'Mini projects' },
    { icon: 'branch', label: 'GitHub portfolio' },
    { icon: 'chat', label: 'Interview basics' },
    { icon: 'document', label: 'Project documentation' },
    { icon: 'play', label: 'Demo preparation' },
    { icon: 'api', label: 'API practice' },
    { icon: 'database', label: 'Database basics' },
    { icon: 'spark', label: 'Clean UI layout' },
    { icon: 'bot', label: 'AI tool practice' },
  ];

  return (
    <section className={`home-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="home-section home-path-section">
        <div className="section-heading">
          <span>Training Method</span>
          <h2>Simple path from learning to project delivery</h2>
        </div>

        <div className="path-grid">
          <div className="path-step">
            <strong>01</strong>
            <h3>Learn Concepts</h3>
            <p>Start with clear examples and notes for every topic.</p>
          </div>
          <div className="path-step">
            <strong>02</strong>
            <h3>Practice Tasks</h3>
            <p>Build small UI sections, forms, pages, and coding exercises.</p>
          </div>
          <div className="path-step">
            <strong>03</strong>
            <h3>Create Projects</h3>
            <p>Convert practice into final year and portfolio-ready projects.</p>
          </div>
          <div className="path-step">
            <strong>04</strong>
            <h3>Get Guidance</h3>
            <p>Improve presentation, demo flow, and interview confidence.</p>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div className="section-heading">
          <span>Student Support</span>
          <h2>Small practice blocks that build confidence</h2>
          <p>
            Every student gets regular practice areas, so learning feels clear,
            step-by-step, and useful for real project work.
          </p>
        </div>

        <div className="feature-grid">
          {quickFeatures.map((feature) => (
            <div className="feature-pill" key={feature.label}>
              <span>
                <FeatureIcon type={feature.icon} />
              </span>
              <strong>{feature.label}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ type }) {
  const icons = {
    code: (
      <>
        <path d="M9 8L5 12L9 16" />
        <path d="M15 8L19 12L15 16" />
        <path d="M13 6L11 18" />
      </>
    ),
    responsive: (
      <>
        <rect x="4" y="5" width="12" height="14" rx="2" />
        <rect x="17" y="9" width="3" height="7" rx="1" />
        <path d="M8 16H12" />
      </>
    ),
    form: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 9H16" />
        <path d="M8 13H13" />
        <path d="M8 17H11" />
        <path d="M15 16L16.5 17.5L20 14" />
      </>
    ),
    layout: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M4 10H20" />
        <path d="M10 10V19" />
      </>
    ),
    branch: (
      <>
        <circle cx="7" cy="6" r="2" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
        <path d="M7 8V16" />
        <path d="M9 6H13C15.2 6 17 7.8 17 10V16" />
      </>
    ),
    chat: (
      <>
        <path d="M5 6H19V16H9L5 20V6Z" />
        <path d="M8 10H16" />
        <path d="M8 13H13" />
      </>
    ),
    document: (
      <>
        <path d="M7 4H15L19 8V20H7V4Z" />
        <path d="M15 4V8H19" />
        <path d="M10 12H16" />
        <path d="M10 16H14" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M10 8L16 12L10 16V8Z" />
      </>
    ),
    api: (
      <>
        <path d="M8 8H5V16H8" />
        <path d="M16 8H19V16H16" />
        <path d="M9 12H15" />
        <path d="M12 9V15" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="6" ry="3" />
        <path d="M6 6V18C6 19.7 8.7 21 12 21S18 19.7 18 18V6" />
        <path d="M6 12C6 13.7 8.7 15 12 15S18 13.7 18 12" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3L14 9L20 12L14 15L12 21L10 15L4 12L10 9L12 3Z" />
        <path d="M19 4L20 7L23 8L20 9L19 12L18 9L15 8L18 7L19 4Z" />
      </>
    ),
    bot: (
      <>
        <rect x="5" y="8" width="14" height="10" rx="3" />
        <path d="M12 8V5" />
        <circle cx="9" cy="13" r="1" />
        <circle cx="15" cy="13" r="1" />
        <path d="M9 17H15" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

export default HomePage;
