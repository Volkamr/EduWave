import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import ForumList from './ForumList';
import ForumDetail from './ForumDetail';
import './ForumPage.css';
import { useParams } from 'react-router-dom';

const ForumPage = () => {
  const [selectedForum, setSelectedForum] = useState(null);

  const handleForumSelect = (forum) => {
    setSelectedForum(forum);
  };

  const [token, setToken] = useState(useParams().accessToken);


  return (
    <div className="forum-grid">
      <SideBar accessToken={token}/>
      <div className="forum-content">
        <ForumList onSelect={handleForumSelect} />
        <ForumDetail forum={selectedForum} />
      </div>
    </div>
  );
};

export default ForumPage;
