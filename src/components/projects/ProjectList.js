import React, { Component } from "react";
import ProjectSummary from "./ProjectSummary";

export class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="project-list section">
        {projects &&
          projects.map((project) => {
            return <ProjectSummary key={project.id} project={project} />;
          })}
      </div>
    );
  }
}

export default ProjectList;
