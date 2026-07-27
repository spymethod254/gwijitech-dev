import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-3 text-center text-4xl font-bold">
        Featured Projects
      </h2>

      <p className="mb-14 text-center text-slate-400">
        A selection of projects I've designed and built.
      </p>

      <div className="grid gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;