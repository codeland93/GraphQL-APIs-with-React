import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../graphql/mutations';

const DeletePost = ({ postId }) => {
  const [deletePost] = useMutation(DELETE_POST);

  const handleDeletePost = () => {
    deletePost({
      variables: { id: postId },
      update: (cache) => {
        cache.modify({
          fields: {
            posts(existingPosts = []) {
              return existingPosts.filter(post => post.id !== postId);
            }
          }
        });
      },
    });
  };

  return <button onClick={handleDeletePost}>Delete</button>;
};

export default DeletePost;
