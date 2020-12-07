/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Courses from './Courses';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql" //  Add Insert URI of GraphQL endpoint
});

const App = () => (
  <ApolloProvider client={client}>
   <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">React and GraphQL - Sample Application</a>
      </nav>
      <div>
        <Courses />
      </div>
    </div>
  </ApolloProvider>
);

export default App;
