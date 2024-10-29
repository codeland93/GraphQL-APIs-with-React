import React from 'react';
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>By User {post.userId}</p>
          <p>{post.body}</p>
          <UpdatePost postId={post.id} />
          <DeletePost postId={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
