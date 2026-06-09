import { useMemo, useState } from 'react';
import '../App.css';

const initialTasks = [
  {
    id: 1,
    title: 'Prepare internship project proposal',
    description: 'Write a summary, features, and timeline for the internship app.',
    status: 'In Progress',
    category: 'Internship',
  },
  {
    id: 2,
    title: 'Design workshop agenda',
    description: 'Set goals, sessions, and hands-on exercises for the workshop.',
    status: 'Planned',
    category: 'Workshop',
  },
];

const scheduleItems = [
  {
    time: '10:00 AM',
    title: 'Project planning & goals',
    speaker: 'Mentor team',
  },
  {
    time: '11:30 AM',
    title: 'React component walkthrough',
    speaker: 'Workshop lead',
  },
  {
    time: '2:00 PM',
    title: 'Hands-on coding session',
    speaker: 'Intern facilitator',
  },
];

function HomePage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [query, setQuery] = useState('');
  const [newTask, setNewTask] = useState({ title: '', description: '', category: 'Internship' });

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const search = query.toLowerCase();
      return (
        task.title.toLowerCase().includes(search) ||
        task.description.toLowerCase().includes(search) ||
        task.category.toLowerCase().includes(search)
      );
    });
  }, [query, tasks]);

  const addTask = () => {
    if (!newTask.title.trim()) return;

    setTasks((current) => [
      ...current,
      {
        id: current.length + 1,
        title: newTask.title.trim(),
        description: newTask.description.trim() || 'No description added yet.',
        status: 'Planned',
        category: newTask.category,
      },
    ]);

    setNewTask({ title: '', description: '', category: 'Internship' });
  };

  return (
    <div className="app-grid">
      <section className="page-header">
        <div>
          <h1>Internship & Workshop Planner</h1>
          <p>
            A simple React dashboard for planning projects, managing workshop sessions, and tracking internship tasks.
            Use this app as a demo for your internship or workshop presentation.
          </p>
        </div>
      </section>

      <section className="card mini-card">
        <div className="mini-card-top">
          <img src="/logo192.png" alt="Purple neon" className="mini-card-image" />
          <div>
            <h2>Launch Box</h2>
            <p>Quick access to workshop prep and internship notes.</p>
          </div>
        </div>
        <button type="button" className="neon-button">
          Start Project
        </button>
      </section>

      <section className="card">
        <h2>Today&apos;s Workshop Schedule</h2>
        <ul className="schedule-list">
          {scheduleItems.map((item) => (
            <li className="schedule-item" key={item.time + item.title}>
              <div className="meta">
                <span>{item.time}</span>
                <span className="tag">{item.speaker}</span>
              </div>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Task Tracker</h2>
        <div className="form-row">
          <input
            type="text"
            placeholder="Search tasks by title, description, or category"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li className="task-item" key={task.id}>
              <strong>{task.title}</strong>
              <p>{task.description}</p>
              <div className="meta">
                <span>{task.category}</span>
                <span className="tag">{task.status}</span>
              </div>
            </li>
          ))}
          {filteredTasks.length === 0 && <li className="task-item">No tasks match your search.</li>}
        </ul>
      </section>

      <section className="card">
        <h2>Add a New Task</h2>
        <div className="form-row">
          <input
            type="text"
            placeholder="Task title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <textarea
            rows="4"
            placeholder="Task description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <select
            value={newTask.category}
            onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
          >
            <option>Internship</option>
            <option>Workshop</option>
          </select>
        </div>
        <button type="button" onClick={addTask}>
          Add Task
        </button>
      </section>
    </div>
  );
}

export default HomePage;
