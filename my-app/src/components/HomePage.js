import React from 'react';
import './HomePage.css';

/* ── existing data ─────────────────────────────────────── */
const quickFeatures = [
  { icon: 'code',      label: 'Daily coding tasks' },
  { icon: 'responsive',label: 'Responsive web design' },
  { icon: 'form',      label: 'Form validation' },
  { icon: 'layout',    label: 'Mini projects' },
  { icon: 'branch',    label: 'GitHub portfolio' },
  { icon: 'chat',      label: 'Interview basics' },
  { icon: 'document',  label: 'Project documentation' },
  { icon: 'play',      label: 'Demo preparation' },
  { icon: 'api',       label: 'API practice' },
  { icon: 'database',  label: 'Database basics' },
  { icon: 'spark',     label: 'Clean UI layout' },
  { icon: 'bot',       label: 'AI tool practice' },
];

const boardFeatures = [
  'Live Classes','Project Help','Internship Support','Resume Build',
  'Interview Prep','Mini Tasks','Weekend Batch','Tamil Guidance',
  'Doubt Clearing','Portfolio Setup','GitHub Basics','Certificate',
];

/* ── new data ──────────────────────────────────────────── */
const courseBadges = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'AI'];

const whyChoose = [
  'Industry-Oriented Training',
  'Hands-On Practical Sessions',
  'Final Year Project Support',
  'Internship Opportunities',
  'Resume & Portfolio Building',
  'Interview Preparation',
  'Expert Mentorship',
  'Career Growth Support',
];

const learnItems = [
  'HTML5 & CSS3','JavaScript (ES6+)','React JS','Python Programming',
  'AI Tools & Basics','Git & GitHub','Responsive Web Design',
  'API Integration','Real-Time Projects',
];

const highlights = [
  'Live Classes','Practical Assignments','Real-Time Projects',
  'Internship Guidance','Project Support','Placement Assistance',
  'Certificate of Completion','Lifetime Learning Support',
];

/* ── component ─────────────────────────────────────────── */
function HomePage({ darkMode, setActivePage }) {
  const goTo = (id) => { if (setActivePage) setActivePage(id); };

  return (
    <section className={`home-page ${darkMode ? 'dark' : 'light'}`}>
      <main>

        {/* ── NEW: Hero ─────────────────────────────────── */}
        <section className="kmhr-hero">
          <div className="code-rain" aria-hidden="true">
            <span>function()</span>
            <span>&lt;React /&gt;</span>
            <span>const career = true;</span>
            <span>AI.prompt()</span>
          </div>

          <div className="hero-copy">
            <span className="eyebrow">Mannampandal, Mayiladuthurai</span>
            <h1>Learn Coding Before College Ends</h1>
            <p className="hero-subtitle">Final Year Projects &amp; Internship Support</p>
            <p className="hero-text">
              Build job-ready skills through practical classes, real-time projects, internship
              guidance, and career-focused mentorship from KMHR IT Job Training Center.
            </p>
            <div className="course-badges" aria-label="Courses">
              {courseBadges.map((b) => <span key={b}>{b}</span>)}
            </div>
            <div className="hero-actions">
              <button className="primary-cta"   type="button" onClick={() => goTo('contact')}>Join Now</button>
              <button className="secondary-cta" type="button" onClick={() => goTo('courses')}>Explore Courses</button>
            </div>
          </div>

          <div className="hero-visual" aria-label="Coding student illustration">
            <img
              className="hero-student-image"
              src="/coding-student-hero.jpeg"
              alt="Coding student with laptop"
            />
          </div>
        </section>

        {/* ── EXISTING: Quick board ─────────────────────── */}
        <div className="home-section home-hero">
          <div className="quick-board" aria-label="Training highlights">
            <div className="quick-board-title">
              <img src="/kmhr-logo-dark.png" alt="KMHR Logo" />
              <div>
                <strong>Learn. Code. Succeed.</strong>
                <span>Mannampandal, Mayiladuthurai</span>
              </div>
            </div>
            <div className="quick-grid">
              {boardFeatures.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>

        {/* ── NEW: Why Choose KMHR ─────────────────────── */}
        <section className="split-section section-shell">
          <div className="kmhr-sh align-left">
            <span>Why Choose KMHR</span>
            <h2>Student-Focused Support From First Class To Career Step</h2>
          </div>
          <div className="pill-grid">
            {whyChoose.map((item) => <div className="check-pill" key={item}>{item}</div>)}
          </div>
        </section>

        {/* ── NEW: What You'll Learn + Training Highlights ─ */}
        <section className="learning-section">
          <div className="learning-card">
            <div className="kmhr-sh align-left">
              <span>What You&apos;ll Learn</span>
              <h2>Build, Ship, And Present Real Work</h2>
            </div>
            <div className="mini-grid">
              {learnItems.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>

          <div className="learning-card orange-card">
            <div className="kmhr-sh align-left">
              <span>Training Highlights</span>
              <h2>Everything Students Expect From A Serious Program</h2>
            </div>
            <div className="mini-grid">
              {highlights.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        {/* ── EXISTING: Training Method ─────────────────── */}
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

        {/* ── EXISTING: Student Support ─────────────────── */}
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
                <span><FeatureIcon type={feature.icon} /></span>
                <strong>{feature.label}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* ── NEW: Mission ──────────────────────────────── */}
        <section className="mission-section">
          <span>Mission</span>
          <p>
            To empower students with in-demand skills and practical knowledge, turning them
            into industry-ready professionals.
          </p>
        </section>

      </main>
    </section>
  );
}

/* ── FeatureIcon (existing) ────────────────────────────── */
function FeatureIcon({ type }) {
  const icons = {
    code: (<><path d="M9 8L5 12L9 16" /><path d="M15 8L19 12L15 16" /><path d="M13 6L11 18" /></>),
    responsive: (<><rect x="4" y="5" width="12" height="14" rx="2" /><rect x="17" y="9" width="3" height="7" rx="1" /><path d="M8 16H12" /></>),
    form: (<><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M8 9H16" /><path d="M8 13H13" /><path d="M8 17H11" /><path d="M15 16L16.5 17.5L20 14" /></>),
    layout: (<><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 10H20" /><path d="M10 10V19" /></>),
    branch: (<><circle cx="7" cy="6" r="2" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /><path d="M7 8V16" /><path d="M9 6H13C15.2 6 17 7.8 17 10V16" /></>),
    chat: (<><path d="M5 6H19V16H9L5 20V6Z" /><path d="M8 10H16" /><path d="M8 13H13" /></>),
    document: (<><path d="M7 4H15L19 8V20H7V4Z" /><path d="M15 4V8H19" /><path d="M10 12H16" /><path d="M10 16H14" /></>),
    play: (<><circle cx="12" cy="12" r="8" /><path d="M10 8L16 12L10 16V8Z" /></>),
    api: (<><path d="M8 8H5V16H8" /><path d="M16 8H19V16H16" /><path d="M9 12H15" /><path d="M12 9V15" /></>),
    database: (<><ellipse cx="12" cy="6" rx="6" ry="3" /><path d="M6 6V18C6 19.7 8.7 21 12 21S18 19.7 18 18V6" /><path d="M6 12C6 13.7 8.7 15 12 15S18 13.7 18 12" /></>),
    spark: (<><path d="M12 3L14 9L20 12L14 15L12 21L10 15L4 12L10 9L12 3Z" /><path d="M19 4L20 7L23 8L20 9L19 12L18 9L15 8L18 7L19 4Z" /></>),
    bot: (<><rect x="5" y="8" width="14" height="10" rx="3" /><path d="M12 8V5" /><circle cx="9" cy="13" r="1" /><circle cx="15" cy="13" r="1" /><path d="M9 17H15" /></>),
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

export default HomePage;
