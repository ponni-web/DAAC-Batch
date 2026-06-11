import React from 'react';
import './Intenship&Workshop.css';

function InternshipWorkshop({ darkMode }) {
  const benefits = [
    'Real-time project practice',
    'Industry-oriented training',
    'Portfolio and resume support',
    'Mentor-led technical guidance',
    'Internship completion certificate',
  ];

  const eligibility = [
    'Students and fresh graduates',
    'Basic computer or programming knowledge',
    'Interest in IT career development',
  ];

  const topics = [
    'Full Stack Web Development',
    'Python and Java Programming',
    'Database Design and SQL',
    'AI and Machine Learning Basics',
    'Cloud, Git, and Deployment',
    'Soft Skills and Interview Preparation',
  ];

  const features = [
    'Experienced IT trainers',
    'Live practical sessions',
    'Project-based assignments',
    'Learning materials and tasks',
    'Workshop participation certificate',
  ];

  return (
    <section className={`kmhr-poster-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="poster-shell">
        <span className="galaxy-glow" />
        <span className="shooting-star shooting-one" />
        <span className="shooting-star shooting-two" />
        <span className="rocket" />
        <span className="star star-one" />
        <span className="star star-two" />
        <span className="star star-three" />
        <span className="planet planet-left" />
        <span className="planet planet-right" />

        <div className="poster-hero">
          <div className="poster-title-block">
            <h1>
              <span>KMHR</span>
              <strong>Internship</strong>
              <strong>Workshop</strong>
            </h1>
            <p>
              Upgrade your technical skills with structured internship training,
              hands-on workshops, real project practice, and career guidance
              from experienced IT mentors.
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit-ring" />
            <div className="earth" />
            <div className="student-scene">
              <div className="person person-one" />
              <div className="person person-two" />
              <div className="person person-three" />
              <div className="laptop" />
            </div>
            <div className="astronaut">
              <span />
            </div>
          </div>
        </div>

        <div className="program-panel glow-blue">
          <div className="panel-heading">
            <span className="panel-icon briefcase-icon" />
            <h2>Internship Program</h2>
          </div>
          <p>
            Our internship program is designed for students and fresh graduates
            who want practical exposure in software development. Participants
            learn by building real-time projects, improving coding standards,
            and preparing for professional IT roles.
          </p>
        </div>

        <div className="info-grid">
          <article className="poster-card glow-cyan">
            <h3>Benefits</h3>
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </article>

          <article className="poster-card glow-purple">
            <h3>Eligibility</h3>
            <ul>
              {eligibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="workshop-heading">
          <span className="panel-icon group-icon" />
          <h2>Workshops</h2>
          <p>
            Focused workshops help learners strengthen core technical concepts,
            practice tools used in IT companies, and improve confidence for
            interviews and workplace communication.
          </p>
        </div>

        <div className="workshop-grid">
          <article className="poster-card glow-blue">
            <h3>Workshop Topics</h3>
            <ul className="topic-list">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>

          <article className="poster-card glow-purple">
            <h3>Workshop Features</h3>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>

          <article className="poster-card registration-card glow-cyan">
            <h3>Registration</h3>
            <div className="clipboard" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>
              Register for the upcoming internship or workshop batch. Our team
              will share schedule details, course guidance, and enrollment
              support after registration.
            </p>
          </article>
        </div>

      </div>
    </section>
  );
}

export default InternshipWorkshop;
