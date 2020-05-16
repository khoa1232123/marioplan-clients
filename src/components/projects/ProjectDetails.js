import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            corrupti quaerat reiciendis qui deserunt quas, perferendis,
            quibusdam vero possimus quasi est impedit cumque dolor recusandae
            eos quo molestiae ad aliquam.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Khoi dai ca</div>
          <div>2nd Septembed</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
