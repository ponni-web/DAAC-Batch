import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard({ darkMode }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [location, setLocation] = useState({
    status: 'Mannampandal location loaded',
    lat: '12.1667',
    lng: '79.8833',
  });

  const totalStudents = 30;
  const gmailAccounts = 28;
  const courseSections = ['React Basics', 'UI/UX Design', 'Node.js Essentials'];
  const courseOverview = [
    { name: 'React Basics', value: 18 },
    { name: 'UI/UX Design', value: 12 },
    { name: 'Node.js Essentials', value: 8 },
  ];
  const recentActivity = [
    { label: 'New enrollments', value: 14 },
    { label: 'Completed lessons', value: 9 },
    { label: 'Quiz attempts', value: 20 },
    { label: 'Certificates issued', value: 5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Optional: Uncomment to request browser location instead of Mannampandal
  /*
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ status: 'Geolocation not supported by browser', lat: '12.1667', lng: '79.8833' });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          status: 'Current location detected',
          lat: position.coords.latitude.toFixed(4),
          lng: position.coords.longitude.toFixed(4),
        });
      },
      () => {
        setLocation({ status: 'Location permission denied - showing Mannampandal', lat: '12.1667', lng: '79.8833' });
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
    );
  }, []);
  */

  const formattedDate = currentDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentDate.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${Number(location.lng) - 0.03}%2C${Number(location.lat) - 0.02}%2C${Number(location.lng) + 0.03}%2C${Number(location.lat) + 0.02}&layer=mapnik&marker=${location.lat}%2C${location.lng}`;

  return (
    <div className={`insight-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="insight-top">
        <div>
          <span className="section-label">Insight</span>
          <h1>Insight Dashboard</h1>
          <p className="section-copy">A clean, frontend-only admin insight board with live time, course charts, and location preview.</p>
        </div>
        <div className="status-chip">
          <span>Local time</span>
          <strong>{formattedTime}</strong>
        </div>
      </div>

      <section className="insight-summary">
        <div className="summary-card">
          <span>Total Students</span>
          <strong>{totalStudents}</strong>
        </div>
        <div className="summary-card">
          <span>Gmail Accounts</span>
          <strong>{gmailAccounts}</strong>
        </div>
        <div className="summary-card">
          <span>Active Sections</span>
          <strong>{courseSections.length}</strong>
        </div>
        <div className="summary-card">
          <span>Updated</span>
          <strong>{formattedDate}</strong>
        </div>
      </section>

      <section className="insight-grid">
        <div className="panel panel-wide">
          <div className="panel-heading">
            <h2>Course Section</h2>
            <span>Available sections in this insight page.</span>
          </div>
          <ul className="course-list">
            {courseSections.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </div>

        <div className="panel panel-graph">
          <div className="panel-heading">
            <h2>Graph Section</h2>
            <span>Course overview by student count.</span>
          </div>
          <div className="chart-list">
            {courseOverview.map((item) => (
              <div key={item.name} className="chart-item">
                <div className="chart-item-label">
                  <span>{item.name}</span>
                  <strong>{item.value} students</strong>
                </div>
                <div className="chart-bar-wrap">
                  <div className="chart-bar" style={{ width: `${item.value * 5}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="insight-bottom">
        <div className="panel panel-activity">
          <div className="panel-heading">
            <h2>Recent Activity</h2>
            <span>Frontend-only metrics for insight overview.</span>
          </div>
          <div className="activity-list">
            {recentActivity.map((item) => (
              <div key={item.label} className="activity-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel panel-map">
          <div className="panel-heading">
            <h2>Current Location</h2>
            <span>{location.status}</span>
          </div>
          <div className="location-grid">
            <div className="location-data">
              <div>
                <span>Latitude</span>
                <strong>{location.lat}</strong>
              </div>
              <div>
                <span>Longitude</span>
                <strong>{location.lng}</strong>
              </div>
            </div>
            <div className="map-frame">
              <iframe title="Current location map" src={mapSrc} loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
