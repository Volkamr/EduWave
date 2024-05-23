import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import ForumList from './ForumList';
import ForumDetail from './ForumDetail';
import './ForumPage.css';

const ForumPage = () => {
  const [selectedForum, setSelectedForum] = useState(null);

  const handleForumSelect = (forum) => {
    setSelectedForum(forum);
  };

  return (
    <div className="forum-grid">
      <SideBar />
      <div className="forum-content">
        <ForumList onSelect={handleForumSelect} />
        <ForumDetail forum={selectedForum} />
      </div>
    </div>
  );
};

export default ForumPage;
