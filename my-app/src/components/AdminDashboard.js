import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard({ darkMode }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [location, setLocation] = useState({
    status: 'Mannampandal location loaded',
    lat: '12.1667',
    lng: '79.8833',
  });

  const totalStudents = 27;
  const gmailAccounts = 26;
  const batches = [
    { name: 'Batch 1', count: 13, teams: 7 },
    { name: 'Batch 2', count: 14, teams: 7 },
  ];
  const teamStructure = [
    { team: 'Team 1', batch: 'Batch 1', members: 2 },
    { team: 'Team 2', batch: 'Batch 1', members: 2 },
    { team: 'Team 3', batch: 'Batch 1', members: 2 },
    { team: 'Team 4', batch: 'Batch 1', members: 2 },
    { team: 'Team 5', batch: 'Batch 1', members: 2 },
    { team: 'Team 6', batch: 'Batch 1', members: 2 },
    { team: 'Team 7', batch: 'Batch 1', members: 1 },
    { team: 'Team 1', batch: 'Batch 2', members: 2 },
    { team: 'Team 2', batch: 'Batch 2', members: 2 },
    { team: 'Team 3', batch: 'Batch 2', members: 2 },
    { team: 'Team 4', batch: 'Batch 2', members: 2 },
    { team: 'Team 5', batch: 'Batch 2', members: 2 },
    { team: 'Team 6', batch: 'Batch 2', members: 2 },
    { team: 'Team 7', batch: 'Batch 2', members: 2 },
  ];
  const courseSections = ['React Basics', 'UI/UX Design', 'Node.js Essentials'];
  const courseOverview = [
    { name: 'React Basics', value: 18 },
    { name: 'UI/UX Design', value: 12 },
    { name: 'Node.js Essentials', value: 8 },
  ];
  const recentActivity = [
    { label: 'New enrollments', value: 27 },
    { label: 'Completed lessons', value: 24 },
    { label: 'Quiz attempts', value: 22 },
    { label: 'Certificates - All Students', value: 27 },
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
          <p className="section-copy">Frontend-only dashboard. All data, charts, and location are generated and stored in the browser. No backend server involved.</p>
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
          <span>Total Batches</span>
          <strong>{batches.length}</strong>
        </div>
        <div className="summary-card">
          <span>Teams Per Batch</span>
          <strong>7</strong>
        </div>
      </section>

      <section className="insight-grid">
        <div className="panel panel-wide">
          <div className="panel-heading">
            <h2>Batch Distribution</h2>
            <span>27 students split into 2 batches with 7 teams each.</span>
          </div>
          <div className="batch-list">
            {batches.map((batch) => (
              <div key={batch.name} className="batch-item">
                <span className="batch-name">{batch.name}</span>
                <span className="batch-count">{batch.count} students</span>
                <span className="batch-teams">{batch.teams} teams</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel panel-graph">
          <div className="panel-heading">
            <h2>Team Structure</h2>
            <span>Teams distributed across 2 batches.</span>
          </div>
          <div className="team-summary">
            {batches.map((batch) => (
              <div key={batch.name} className="team-batch">
                <strong>{batch.name}: {batch.teams} Teams</strong>
                <small>{batch.count} members</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="insight-bottom">
        <div className="panel panel-activity">
          <div className="panel-heading">
            <h2>Recent Activity</h2>
            <span>Frontend mock data only - no backend.</span>
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
            <span>Mannampandal, Tamil Nadu - displayed in browser only.</span>
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
