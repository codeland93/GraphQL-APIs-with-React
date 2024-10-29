import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../graphql/mutations';

const UpdatePost = ({ postId }) => {
  const [updatePost] = useMutation(UPDATE_POST);

  const handleUpdatePost = () => {
    updatePost({
      variables: {
        id: postId,
        input: { title: "Updated Title", body: "Updated Content" },
      },
    });
  };

  return <button onClick={handleUpdatePost}>Edit</button>;
};

export default UpdatePost;
