import React from "react";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="projects">
      Projects Content
    </div>
  );
});

export default Projects;
