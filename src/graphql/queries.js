import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      data {
        id
        title
        userId
        body
      }
    }
  }
`;

export const GET_POSTS_BY_USER = gql`
  query GetPostsByUser($userId: ID!) {
    posts(options: { filter: { userId: { eq: $userId } } }) {
      data {
        id
        title
        body
      }
    }
  }
`;
