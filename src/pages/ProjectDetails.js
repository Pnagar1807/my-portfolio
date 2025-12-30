import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="project-details">
      <div className="container" style={{ paddingTop: '100px', minHeight: '60vh' }}>
        <h1>Project Details</h1>
        <p>This page would show detailed information about project {id}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;