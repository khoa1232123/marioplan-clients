import React from "react";
import { Link } from "react-router-dom";

const ProjectSummary = ({ project }) => {
  const { id, title, content } = project;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gray-text text-darken-3">
        <Link to={'/project/'+ id}>
          <span className="card-title">{title}</span>
        </Link>
        <p>{content}</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
