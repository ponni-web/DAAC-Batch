import React, { useState } from 'react';
import './StudentTestimonial.css';

const testimonials = [
  {
    name: 'S. Aarthi',
    course: 'Full Stack Development',
    quote:
      'The trainers explained every concept with real projects. I started with basics and finished with the confidence to build complete web apps.',
    rating: '5.0',
  },
  {
    name: 'R. Ashiga',
    course: 'Data Analytics',
    quote:
      'The batch schedule, assignments, and mentor feedback helped me stay consistent. The practical sessions made interviews much easier.',
    rating: '4.9',
  },
  {
    name: 'G. Abiaya',
    course: 'Python Programming',
    quote:
      'I liked how each topic connected to job-ready tasks. The support team guided me from practice problems to portfolio projects.',
    rating: '4.8',
  },
  {
    name: 'S. Abirami',
    course: 'Web Designing',
    quote:
      'The classes were easy to follow, and every design task helped me understand how real websites are built.',
    rating: '4.9',
  },
  {
    name: 'N. Aswini',
    course: 'Java Programming',
    quote:
      'The trainer cleared my doubts patiently and helped me improve my coding logic through daily practice.',
    rating: '4.8',
  },
  {
    name: 'A. Atchayapriya',
    course: 'Digital Marketing',
    quote:
      'I learned SEO, ads, and social media strategy with practical examples that I could apply immediately.',
    rating: '5.0',
  },
    {
    name: 'B. charumathi',
    course: 'React Development',
    quote:
      'Project-based learning made React simple. I built reusable components and understood frontend workflows clearly.',
    rating: '4.9',
  },
  {
    name: 'P. Dhanya',
    course: 'UI UX Design',
    quote:
      'The course improved my design thinking and helped me create cleaner layouts for real users.',
    rating: '4.8',
  },
  {
    name: 'J. Jayaprathi',
    course: 'Node.js Development',
    quote:
      'Backend development felt difficult before, but the step-by-step sessions made APIs and databases understandable.',
    rating: '4.9',
  },
  {
    name: 'B. Jeeva Biruntha',
    course: 'Software Testing',
    quote:
      'Manual and automation testing concepts were taught with useful examples and interview-focused practice.',
    rating: '4.8',
  },
  {
    name: 'V. Jenciya',
    course: 'Cloud Computing',
    quote:
      'The hands-on cloud labs helped me understand deployment, storage, and server basics with confidence.',
    rating: '4.7',
  },
  {
    name: 'S. Keerthana',
    course: 'Graphic Design',
    quote:
      'The assignments helped me improve my creativity and build a small portfolio during the course.',
    rating: '4.9',
  },
  {
    name: 'P. Mahalakshmi',
    course: 'Cyber Security',
    quote:
      'The sessions gave me a strong foundation in security tools, threats, and safe system practices.',
    rating: '4.8',
  },
  {
    name: 'R. Mahalakshmi',
    course: 'C Programming',
    quote:
      'I started as a beginner and became comfortable with loops, arrays, functions, and problem solving.',
    rating: '4.9',
  },
  {
    name: 'S. Nethra',
    course: 'MERN Stack',
    quote:
      'Building a complete MERN project helped me understand how frontend, backend, and database work together.',
    rating: '5.0',
  },
  {
    name: 'K. Pradeepa',
    course: 'Advanced Excel',
    quote:
      'The practical Excel tasks improved my speed and helped me use formulas, charts, and reports better.',
    rating: '4.8',
  },
  {
    name: 'P. Prithika',
    course: 'Machine Learning',
    quote:
      'The trainer explained algorithms with simple examples, and the projects helped me connect theory to practice.',
    rating: '4.7',
  },
  {
    name: 'R. Ranjani',
    course: 'Angular Development',
    quote:
      'The course structure was clear, and I learned components, routing, services, and forms through practice.',
    rating: '5.0',
  },
  {
    name: 'S. Sabi',
    course: 'PHP Development',
    quote:
      'The training helped me build dynamic pages and understand database connectivity in a practical way.',
    rating: '4.7',
  },
  {
    name: 'S. Sahana',
    course: 'Bootstrap',
    quote:
      'I learned how to create responsive pages quickly while keeping the design clean and organized.',
    rating: '4.8',
  },
  {
    name: 'S. Santhiya',
    course: 'DevOps Basics',
    quote:
      'The course introduced me to Git, deployment, and automation in a simple and useful manner.',
    rating: '4.9',
  },
  {
    name: 'R. Sharmila',
    course: 'SQL Database',
    quote:
      'The query practice sessions helped me understand joins, grouping, filtering, and database design.',
    rating: '4.8',
  },
  {
    name: 'M. Sharumathi',
    course: 'WordPress',
    quote:
      'I built a complete WordPress site during training and learned how to customize pages confidently.',
    rating: '4.7',
  },
  {
    name: 'V. Srimathi',
    course: 'Business Analytics',
    quote:
      'The dashboard exercises and case studies helped me understand how data supports business decisions.',
    rating: '4.9',
  },
  {
    name: 'R. Subasri',
    course: 'Mobile App Development',
    quote:
      'The app-building sessions were practical, and I learned how to structure screens and handle user flow.',
    rating: '4.8',
  },
  {
    name: 'G. Sugartha',
    course: 'Communication Skills',
    quote:
      'The presentation practice and interview sessions improved my confidence and professional communication.',
    rating: '4.9',
  },
  {
    name: 'S. Vinodha',
    course: 'Git and GitHub',
    quote:
      'I learned version control properly and now feel comfortable managing project code with GitHub.',
    rating: '4.8',
  },
];

const CARD_POSITIONS = ['far-left', 'left', 'center', 'right', 'far-right'];

const carouselTestimonials = [
  'Aswini',
  'Subasri',
  'Abirami',
  'Sabi',
  'Sandhiya',
  'Abinaya',
  'Jenciya',
  'Ranjani',
  'Aarthi',
  'Prathipa',
  'Aashika',
  'Charumathi',
  'Prithika',
  'Sugartha',
  'Sahana',
  'Srimathi',
  'Vinotha',
  'Keerthana',
  'Jeyaperathi',
  'Jeeva Biruntha',
  'Netra',
  'Sharuthi',
  'Sharmila',
  'Dhanya',
  'P. Mahalakshmi',
  'R. Mahalakshmi',
  'Atchayapriya',
].map((name) => ({
  name,
  course: 'DAAC Student',
  quote: 'The training was practical, clear, and helped me improve my technical confidence.',
  avatar: name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .replace('.', '')
    .slice(0, 2)
    .toUpperCase(),
}));

function StudentTestimonial({ darkMode }) {
  const themeClass = darkMode ? 'dark' : 'light';
  const [activeIndex, setActiveIndex] = useState(2);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? carouselTestimonials.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === carouselTestimonials.length - 1 ? 0 : current + 1));
  };

  const getCardPosition = (index) => {
    let offset = (index - activeIndex + carouselTestimonials.length) % carouselTestimonials.length;

    if (offset > carouselTestimonials.length / 2) {
      offset -= carouselTestimonials.length;
    }

    if (offset < -2 || offset > 2) {
      return 'hidden';
    }

    return CARD_POSITIONS[offset + 2];
  };

  const isVisibleCard = (index) => getCardPosition(index) !== 'hidden';
  const activeStudent = carouselTestimonials[activeIndex];

  return (
    <section
      id="student-testimonials"
      className={`student-testimonials ${themeClass}`}
    >

      <div className="testimonial-shell">
        <div className="testimonial-header">
          <span className="testimonial-kicker"></span>
          <h1>Student Testimonial</h1>
          <p>
            Hear from learners who built practical skills, finished guided
            projects, and moved closer to their IT career goals.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={`${testimonial.name}-${index}`}>
              <div className="testimonial-top-row">
                <div className="testimonial-avatar">
                  {testimonial.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div className="testimonial-person">
                  <h2>{testimonial.name}</h2>
                </div>
                <div className="testimonial-rating"> ⭐ {testimonial.rating}</div>
              </div>
              <p className="testimonial-course">{testimonial.course}</p>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </article>
          ))}
        </div>

        <div className={`student-testimonial-section ${themeClass}`}>
          <div className="student-testimonial-inner">
            <div className="student-carousel" aria-label="Student testimonials">
              {carouselTestimonials.map((student, index) => {
                const position = getCardPosition(index);

                return (
                  <button
                    className={`student-testimonial-card ${position}`}
                    key={student.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-hidden={!isVisibleCard(index)}
                    aria-label={`Show testimonial from ${student.name}`}
                  >
                    <div className="quote-mark" aria-hidden="true">
                      "
                    </div>

                    <div className="student-avatar" aria-hidden="true">
                      {student.avatar}
                    </div>

                    <blockquote>
                      <p>"{student.quote}"</p>
                      <footer>
                        - {student.name}, {student.course}
                      </footer>
                    </blockquote>

                    <div className="student-rating" aria-label="5 star rating">
                      *****
                    </div>

                    <div className="student-card-shine" aria-hidden="true" />
                  </button>
                );
              })}

              <button
                className="student-carousel-arrow prev"
                type="button"
                aria-label="Previous testimonial"
                onClick={showPrevious}
              >
                &lt;
              </button>

              <button
                className="student-carousel-arrow next"
                type="button"
                aria-label="Next testimonial"
                onClick={showNext}
              >
                &gt;
              </button>
            </div>

            <p className="student-active-name">{activeStudent.name}</p>

            <div className="student-carousel-dots" aria-label="Choose testimonial">
              {carouselTestimonials.map((student, index) => (
                <button
                  className={activeIndex === index ? 'active' : ''}
                  key={student.name}
                  type="button"
                  aria-label={`Show testimonial from ${student.name}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentTestimonial;
