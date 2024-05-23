import React, { useState } from 'react';
import './ForumDetail.css';

const ForumDetail = ({ forum }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Eleanor Sainz',
      role: 'UI/UX designer',
      date: '10 Sep 2024',
      content: 'Tema sobre el cual va a tratar el foro...',
      likes: 15,
      comments: []
    },
    {
      id: 2,
      user: 'Eleanor Sainz',
      role: 'UI/UX designer',
      date: '10 Sep 2024',
      content: 'Tema sobre el cual va a tratar el foro...',
      likes: 15,
      comments: []
    }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
      ? { ...post, comments: [...post.comments, newComment] } 
      : post
    ));
    setNewComment('');
  };

  if (!forum) {
    return <div className="forum-detail">Seleccione un foro para ver los detalles</div>;
  }

  return (
    <div className="forum-detail">
      <h2>{forum.name}</h2>
      <h3>{forum.course}</h3>
      <p>{forum.date}</p>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <img src="https://via.placeholder.com/50" alt="avatar" className="avatar" />
            <div>
              <h4>{post.user}</h4>
              <span>{post.role}</span>
              <span>{post.date}</span>
            </div>
          </div>
          <div className="post-content">
            <p>{post.content}</p>
          </div>
          <div className="post-actions">
            <button onClick={() => alert('Like')}><i className="bx bx-like"></i> {post.likes}</button>
            <button onClick={() => alert('Reply')}><i className="bx bx-reply"></i> Responder</button>
            <button onClick={() => alert('Share')}><i className="bx bx-share"></i> Compartir</button>
          </div>
          <div className="comments">
            {post.comments.map((comment, index) => (
              <div key={index} className="comment">{comment}</div>
            ))}
          </div>
          <input 
            type="text" 
            value={newComment} 
            onChange={handleCommentChange} 
            placeholder="Escribe un comentario" 
          />
          <button onClick={() => handleAddComment(post.id)}>Comentar</button>
        </div>
      ))}
    </div>
  );
};

export default ForumDetail;
