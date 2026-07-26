function Projects() {
  const projects = [
    {
      title: "LINKUP.HUB",
      description:
        "A modern social media platform with authentication, profiles, posts, and real-time messaging.",
      tech: ["React", "Vite", "Tailwind CSS", "Supabase"],
      github: "#",
      demo: "#",
    },
    {
      title: "Creator Hub",
      description:
        "A platform designed for creators to showcase and manage their content.",
      tech: ["React", "Node.js", "Express"],
      github: "#",
      demo: "#",
    },
    {
      title: "NetStream",
      description:
        "A sleek video streaming interface focused on performance and user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 className="mb-3 text-center text-4xl font-bold">
        Featured Projects
      </h2>

      <p className="mb-12 text-center text-slate-400">
        Some of the projects I've built and continue to improve.
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-cyan-400"
          >
            <div className="grid md:grid-cols-2">
              {/* Screenshot Placeholder */}
              <div className="flex min-h-[250px] items-center justify-center bg-slate-800">
                <span className="text-slate-500">
                  Screenshot Coming Soon
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-4 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="rounded-lg bg-slate-800 px-5 py-3 hover:bg-slate-700"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;