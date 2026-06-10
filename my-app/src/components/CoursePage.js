import './CoursePage.css';

const supportItems = [
  'Learn coding before college ends',
  'Final year project support',
  'Internship guidance',
  'Real-time coding practice',
];

const trainingHighlights = [
  'Expert Trainers',
  'Hands-on Practical Training',
  'Career & Placement Support',
];

function CoursePage() {
  return (
    <main className="course-page">
      <section className="course-hero">
        <div className="hero-copy">
          <span className="eyebrow">KMHR IT Job Training Center</span>
          <h1>Learn Modern IT Skills & Get Placed</h1>
          <p>
            Learn coding before college ends with practical classes, project support,
            internship guidance and job-ready technical skills.
          </p>

          <div className="support-list">
            {supportItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <img src="/kmhr-logo-dark.png" alt="KMHR IT Job Training Center" />
          <h2>Available Courses</h2>
          <p>HTML, CSS, JavaScript, React, Node.js, React Native, Python, DSA and AI/ML.</p>
        </div>
      </section>

      <section className="training-strip" aria-label="Training benefits">
        {trainingHighlights.map((highlight) => (
          <div className="training-item" key={highlight}>
            <span aria-hidden="true" />
            <strong>{highlight}</strong>
          </div>
        ))}
      </section>
    </main>
  );
}

export default CoursePage;
