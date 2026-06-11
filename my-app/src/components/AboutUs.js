import React from 'react';
import './AboutUs.css';

function AboutUs({ darkMode }) {
  const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'AI', 'Git', 'Projects'];

  const languages = [
    {
      name: 'HTML',
      tag: 'Structure',
      text: 'Web page layout, semantic tags, forms, tables, media, SEO basics, and clean document structure.',
      skills: ['Page structure', 'Forms', 'SEO basics'],
    },
    {
      name: 'CSS',
      tag: 'Design',
      text: 'Colors, typography, box model, flexbox, grid, responsive design, transitions, and modern UI styling.',
      skills: ['Flexbox', 'Grid', 'Responsive UI'],
    },
    {
      name: 'JavaScript',
      tag: 'Logic',
      text: 'Variables, functions, DOM events, arrays, objects, validation, API basics, and interactive web behavior.',
      skills: ['DOM', 'Events', 'API basics'],
    },
    {
      name: 'React',
      tag: 'Frontend',
      text: 'Components, props, state, hooks, conditional rendering, reusable UI modules, and project structure.',
      skills: ['Components', 'Hooks', 'Reusable UI'],
    },
    {
      name: 'Python',
      tag: 'Programming',
      text: 'Core syntax, problem solving, file handling, automation basics, data handling, and beginner-friendly logic.',
      skills: ['Problem solving', 'Automation', 'Data basics'],
    },
    {
      name: 'AI',
      tag: 'Future Skill',
      text: 'AI tool usage, prompt writing, automation ideas, project integration, and smart learning workflows.',
      skills: ['Prompting', 'AI tools', 'Automation ideas'],
    },
  ];

  const services = [
    {
      title: 'Coding Before College Ends',
      text: 'Students can build strong programming basics and practical confidence before completing college.',
    },
    {
      title: 'Final Year Projects',
      text: 'Guidance for choosing, planning, developing, and presenting meaningful final-year project work.',
    },
    {
      title: 'Internship Support',
      text: 'Hands-on internship preparation with real workflow exposure, documentation help, and mentoring.',
    },
    {
      title: 'Job Training',
      text: 'Focused learning paths for beginners who want to move from classroom knowledge to IT career readiness.',
    },
  ];

  const learningSkills = [
    'Daily coding practice with beginner-friendly tasks',
    'Debugging mindset and error-solving confidence',
    'Clean UI building with color, spacing, and typography',
    'Project planning, module splitting, and reusable components',
    'Resume-ready final year project explanation',
    'Interview basics, communication, and demo presentation',
  ];

  const courseOptions = [
    'Weekend coding batches',
    'Final year project batch',
    'Internship support batch',
    'Frontend development track',
    'Python beginner track',
    'React project track',
  ];

  const processSteps = [
    { step: '01', title: 'Learn Basics', text: 'Start with HTML, CSS, JavaScript, and programming foundations.' },
    { step: '02', title: 'Build Projects', text: 'Create real pages, forms, dashboards, and React components.' },
    { step: '03', title: 'Get Support', text: 'Prepare final-year projects, internship tasks, and project demos.' },
    { step: '04', title: 'Show Skills', text: 'Practice explaining your project clearly for college and career needs.' },
  ];

  return (
    <section className={`about-us-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="about-us-container">
        <div className="about-hero">
          <div className="about-profile-card">
            <div className="about-profile-top">
              <div className="about-profile-main">
                <span className="about-kicker">About Us</span>
                <h1>KMHR IT Job Training Center</h1>
                <div className="about-profile-tags" aria-label="KMHR training highlights">
                  <span>IT Job Training</span>
                  <span>Project Support</span>
                  <span>Internship Guide</span>
                </div>
              </div>
            </div>

            <div className="about-bio">
              <p>Learn Coding Before College Ends</p>
              <p>Final year projects and Internship support</p>
              <p>HTML | CSS | JS | React | Python | AI</p>
              <p>Mannampandal, Mayiladuthurai.</p>
            </div>
          </div>

          <div className="about-hero-copy">
            <span className="about-kicker">Learn. Code. Succeed.</span>
            <h2>Career-focused coding training for students who want practical IT skills.</h2>
            <p>
              KMHR helps learners move from basics to real project work with guided
              training, internship support, and final-year project mentoring.
            </p>
          </div>
        </div>

        <div className="about-stack-panel">
          <div>
            <span className="about-section-label">Training Stack</span>
            <h2>Technologies We Teach</h2>
          </div>
          <div className="about-tech-list">
            {techStack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="about-learning-section">
          <div className="about-section-heading">
            <span className="about-section-label">Learning Skills</span>
            <h2>What Students Improve Here</h2>
            <p>
              Training is focused on practical skills, project confidence, and the
              ability to explain what you build clearly.
            </p>
          </div>
          <div className="about-skill-list">
            {learningSkills.map((skill) => (
              <div className="about-skill-item" key={skill}>
                <span>✓</span>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-language-section">
          <div className="about-section-heading">
            <span className="about-section-label">Languages & Tools</span>
            <h2>Detailed Coding Training</h2>
            <p>
              Each topic is taught with examples, practice tasks, and project usage
              so students understand where the language is used.
            </p>
          </div>
          <div className="about-language-grid">
            {languages.map((language) => (
              <article className="about-language-card" key={language.name}>
                <div className="about-language-top">
                  <strong>{language.name}</strong>
                  <span>{language.tag}</span>
                </div>
                <p>{language.text}</p>
                <div className="about-mini-skills">
                  {language.skills.map((skill) => (
                    <small key={skill}>{skill}</small>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="about-service-grid">
          {services.map((service) => (
            <article className="about-service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="about-options-section">
          <div className="about-section-heading">
            <span className="about-section-label">Batch Options</span>
            <h2>Choose Your Learning Path</h2>
          </div>
          <div className="about-options-list">
            {courseOptions.map((option) => (
              <span key={option}>{option}</span>
            ))}
          </div>
        </div>

        <div className="about-process-section">
          <div className="about-section-heading">
            <span className="about-section-label">Training Flow</span>
            <h2>From Basics To Project Demo</h2>
          </div>
          <div className="about-process-grid">
            {processSteps.map((item) => (
              <article className="about-process-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-location-band">
          <div>
            <span className="about-section-label">Visit Us</span>
            <h2>Mannampandal, Mayiladuthurai</h2>
            <p>
              A local training space for students looking for coding classes,
              internship guidance, and final-year project support.
            </p>
          </div>
          <a className="about-action" href="https://www.google.com/maps/search/Mannampandal,+Mayiladuthurai" target="_blank" rel="noreferrer">
            View Location
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
