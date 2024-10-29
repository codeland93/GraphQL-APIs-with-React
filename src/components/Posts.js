import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS } from '../graphql/queries';
import PostList from './PostList';

const Posts = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>All Posts</h1>
      <PostList posts={data.posts.data} />
    </div>
  );
};

export default Posts;
