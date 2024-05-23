import React, { useState } from 'react';
import './AddForum.css';

const AddForum = ({ addForum }) => {
  const [course, setCourse] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course && name && date) {
      addForum({ course, name, date });
      setCourse('');
      setName('');
      setDate('');
    }
  };

  return (
    <div className="add-forum">
      <h2>Agregar Nuevo Foro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Curso:</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Nombre del Foro:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Fecha:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Foro</button>
      </form>
    </div>
  );
};

export default AddForum;
