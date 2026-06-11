import React, { useState } from 'react';
import './CantactInquiryForm.css';

const COURSE_OPTIONS = [
  { value: 'dsa', label: 'DSA' },
  { value: 'react-js', label: 'React JS' },
  { value: 'live-projects', label: 'Live Projects' },
  { value: 'ai-ml', label: 'AI/ML' },
  { value: 'node-js', label: 'Node JS' },
  { value: 'python', label: 'Python' },
];

function ContactInquiryForm({ darkMode }) {
  const [submitted, setSubmitted] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courseError, setCourseError] = useState('');

  const selectedCourseLabel = COURSE_OPTIONS.find(
    (course) => course.value === selectedCourse
  )?.label;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedCourse) {
      setCourseError('Please choose a course.');
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setCourseOpen(false);
    setCourseError('');
    setSelectedCourse('');
    event.currentTarget.reset();
  };

  return (
    <section className={`contact-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="contact-shell">
        <div className="contact-info-panel">
          <div className="contact-heading">
            <h1>Get in Touch</h1>
            <span />
            <p>
              Have questions or need more information? We're here to help you
              take the next step towards your future.
            </p>
          </div>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </div>
              <div>
                <strong>Email</strong>
                <span>kmhronestopsolution@gmail.com</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" />
                </svg>
              </div>
              <div>
                <strong>Instagram</strong>
                <span>@kmhr_it_training</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <strong>Address</strong>
                <span>Mannampandal, Mayiladuthurai</span>
              </div>
            </div>
          </div>

          <div className="help-box">
            <div className="help-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1v-8h3z" />
                <path d="M3 19a2 2 0 0 0 2 2h1v-8H3z" />
              </svg>
            </div>
            <div>
              <strong>We're Here to Help!</strong>
              <span>Our team is ready to assist you. Let's build your future together.</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <span className="field-control">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 21a8 8 0 0 0-16 0" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input type="text" name="fullName" placeholder="Enter full name" required />
            </span>
          </label>

          <label>
            Email
            <span className="field-control">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <input type="email" name="email" placeholder="Enter email" required />
            </span>
          </label>

          <label>
            Phone Number
            <span className="field-control">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" />
              </svg>
              <input type="tel" name="phone" placeholder="Enter phone number" required />
            </span>
          </label>

          <label>
            Location
            <span className="field-control">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <input type="text" name="location" placeholder="Enter location" required />
            </span>
          </label>

          <label>
            Interested Course
            <span className={`field-control course-dropdown ${courseOpen ? 'open' : ''}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m22 10-10-5-10 5 10 5 10-5z" />
                <path d="M6 12v5c3 2 9 2 12 0v-5" />
              </svg>
              <input type="hidden" name="course" value={selectedCourse} />
              <button
                type="button"
                className={`course-trigger ${selectedCourse ? '' : 'placeholder'}`}
                onClick={() => setCourseOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={courseOpen}
              >
                <span>{selectedCourseLabel || 'Select course'}</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {courseOpen && (
                <div className="course-menu" role="listbox">
                  {COURSE_OPTIONS.map((course) => (
                    <button
                      type="button"
                      key={course.value}
                      className={selectedCourse === course.value ? 'selected' : ''}
                      onClick={() => {
                        setSelectedCourse(course.value);
                        setCourseOpen(false);
                        setCourseError('');
                      }}
                      role="option"
                      aria-selected={selectedCourse === course.value}
                    >
                      {course.label}
                    </button>
                  ))}
                </div>
              )}
            </span>
            {courseError && <span className="field-error">{courseError}</span>}
          </label>

          <label className="message-field">
            Message
            <span className="field-control textarea-control">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              </svg>
              <textarea name="message" placeholder="Enter your message" rows="3" required />
            </span>
          </label>

          <button type="submit" className="submit-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m22 2-7 20-4-9-9-4z" />
              <path d="M22 2 11 13" />
            </svg>
            Send Inquiry
          </button>

          {submitted && (
            <p className="success-message">Inquiry submitted successfully.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactInquiryForm;
