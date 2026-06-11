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

const courses = [
  {
    name: 'HTML',
    description: 'Build clean web page structure, forms, tables, semantic tags, and portfolio-ready layouts.',
    accent: 'orange',
  },
  {
    name: 'CSS',
    description: 'Learn responsive design, flexbox, grid, animations, and modern page styling.',
    accent: 'blue',
  },
  {
    name: 'JavaScript',
    description: 'Master variables, arrays, functions, DOM events, loops, and browser interactivity.',
    accent: 'yellow',
  },
  {
    name: 'React',
    description: 'Create reusable components, manage state, handle props, and build single page apps.',
    accent: 'cyan',
  },
  {
    name: 'Python',
    description: 'Learn programming basics, problem solving, file handling, and practical automation.',
    accent: 'green',
  },
  {
    name: 'AI/ML',
    description: 'Understand AI and machine learning basics, model ideas, prompts, and real project workflows.',
    accent: 'purple',
  },
  {
    name: 'Node.js',
    description: 'Build backend APIs, handle routes, connect databases, and create server-side applications.',
    accent: 'lime',
  },
  {
    name: 'React Native',
    description: 'Create mobile app screens, reusable components, navigation flows, and app-ready interfaces.',
    accent: 'indigo',
  },
  {
    name: 'DSA',
    description: 'Practice arrays, strings, recursion, searching, sorting, and interview problem solving.',
    accent: 'red',
  },
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
            internship guidance, and job-ready technical skills.
          </p>

          <div className="support-list" aria-label="Student support">
            {supportItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="training-strip" aria-label="Training benefits">
          {trainingHighlights.map((highlight) => (
            <div className="training-item" key={highlight}>
              <strong>{highlight}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="course-content-grid" aria-labelledby="course-list-title">
        <div className="course-list-panel">
          <div className="section-heading">
            <span>Course Names</span>
            <h3 id="course-list-title">Training Programs</h3>
          </div>

          <div className="course-card-grid">
            {courses.map((course) => (
              <article className={`course-card ${course.accent}`} key={course.name}>
                <div className="course-code">{course.name.slice(0, 2).toUpperCase()}</div>
                <h4>{course.name}</h4>
                <p>{course.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CoursePage;
