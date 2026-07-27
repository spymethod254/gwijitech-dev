import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-lg transition hover:border-cyan-400 hover:shadow-cyan-500/20"
    >
      {/* Browser Header */}
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>

        <p className="ml-4 text-sm text-slate-400">
          {project.title}
        </p>
      </div>

      {/* Screenshot */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold">
            {project.title}
          </h3>

          <span className="text-sm text-cyan-400">
            {project.status}
          </span>
        </div>

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
            className="rounded-lg bg-slate-800 px-5 py-3 transition hover:bg-slate-700"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Live Demo
          </a>
        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;