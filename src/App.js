import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import './App.css';


const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <CreatePost />
        <Posts />
      </div>
    </ApolloProvider>
  );
};

export default App;
