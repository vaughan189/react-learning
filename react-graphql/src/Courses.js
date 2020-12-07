import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Course from './Course';


const Courses = () => (
  <Query query={gql`{ courses {
          id
          title
          author
          description
          topic
          url
        }
      }
    `}>

    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error Occured</p>;
      if (data.courses.length) {
        return data.courses.map(course => (
          <Course key={course.id} course={course}/>
        ))}
        }
    }
  </Query>
);

export default Courses;