import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../graphql/mutations';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [createPost, { data }] = useMutation(CREATE_POST);

  const handleCreatePost = () => {
    createPost({
      variables: {
        input: { title, body, userId: 1 },
      },
    });
  };

  return (
    <div>
      <h3>Create New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button onClick={handleCreatePost}>Submit</button>
      {data && <p>New Post Created: {data.createPost.title}</p>}
    </div>
  );
};

export default CreatePost;
