import React from 'react';
import './ForumList.css';

const ForumList = ({ onSelect }) => {
  const forums = [
    { id: 1, course: 'Curso número 1', name: 'Foro 1', date: '10 Sep 2024', participants: 12 },
    { id: 2, course: 'Curso número 2', name: 'Foro 2', date: '04 Oct 2024', participants: 10 },
    { id: 3, course: 'Curso número 3', name: 'Foro 3', date: '07 Nov 2024', participants: 20 },
    { id: 4, course: 'Curso número 4', name: 'Foro 4', date: '10 Dec 2024', participants: 12 }
  ];

  return (
    <div className="forum-list">
      <input
        type="text"
        className="search-bar"
        placeholder="Encuentra un foro"
      />
      {forums.map((forum) => (
        <div key={forum.id} className="course-group">
          <h3>{forum.course}</h3>
          <ul>
            <li onClick={() => onSelect(forum)}>
              <p>{forum.name}</p>
              <p>{forum.date}</p>
              <p>{forum.participants} participantes</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ForumList;
