import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

const ProjectSummary = ({ project }) => {
  const { id, title, content, createdAt } = project;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gray-text text-darken-3">
        <Link to={'/project/'+ id}>
          <span className="card-title">{title}</span>
        </Link>
        <p>{content}</p>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
