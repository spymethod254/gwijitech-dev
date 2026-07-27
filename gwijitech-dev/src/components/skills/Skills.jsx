import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiGithub,
  SiGit,
  SiPython,
  SiPhp,
  SiLinux,
  SiSqlite,
  SiMongodb,
  SiVercel,
  SiRender,
} from "react-icons/si";

import {
  FaBug,
  FaTerminal,
} from "react-icons/fa";
const skills = [
  {
    name: "React",
    icon: <SiReact className="text-5xl text-sky-400" />,
    description: "Building interactive and reusable user interfaces.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-5xl text-white" />,
    description: "Building fast React applications with server-side rendering.",
  },
  {
    name: "Vite",
    icon: <SiVite className="text-5xl text-violet-400" />,
    description: "Lightning-fast frontend development tooling.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-5xl text-yellow-400" />,
    description: "The core language of modern web development.",
  },
  {
    name: "Python",
    icon: <SiPython className="text-5xl text-yellow-500" />,
    description: "Building automation scripts, AI tools, and backend applications.",
  },
  {
    name: "PHP",
    icon: <SiPhp className="text-5xl text-indigo-400" />,
    description: "Developing dynamic websites and backend services.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
    description: "Utility-first CSS for beautiful responsive designs.",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-5xl text-green-500" />,
    description: "Building fast and scalable backend applications.",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-5xl text-gray-300" />,
    description: "Minimal and flexible Node.js web framework.",
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="text-5xl text-emerald-400" />,
    description: "Authentication, PostgreSQL database, and storage.",
  },
  {
    name: "SQLite",
    icon: <SiSqlite className="text-5xl text-sky-500" />,
    description: "Lightweight SQL database for local applications.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-5xl text-green-500" />,
    description: "NoSQL database for scalable web applications.",
  },
  {
    name: "Git",
    icon: <SiGit className="text-5xl text-orange-500" />,
    description: "Version control for tracking code changes.",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-5xl text-white" />,
    description: "Code hosting and collaboration platform.",
  },
  {
    name: "Linux",
    icon: <SiLinux className="text-5xl text-yellow-500" />,
    description: "Daily development using Linux environments and tools.",
  },
  {
    name: "Bash",
    icon: <FaTerminal className="text-5xl text-green-400" />,
    description: "Terminal commands and shell scripting for productivity.",
  },
  {
    name: "Debugging",
    icon: <FaBug className="text-5xl text-red-400" />,
    description: "Finding, analyzing, and fixing software issues efficiently.",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-5xl text-white" />,
    description: "Deploying fast and reliable frontend applications.",
  },
  {
    name: "Render",
    icon: <SiRender className="text-5xl text-blue-400" />,
    description: "Hosting backend services and APIs.",
  },
];
                                                                                                                                                function Skills() {
                                                                                                                                                  return (
                                                                                                                                                      <section
                                                                                                                                                            id="skills"
                                                                                                                                                                  className="relative overflow-hidden py-24"
                                                                                                                                                                      >
                                                                                                                                                                            {/* Background Glow */}
                                                                                                                                                                                  <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

                                                                                                                                                                                        <div className="relative z-10 mx-auto max-w-6xl px-6">
                                                                                                                                                                                                {/* Heading */}
                                                                                                                                                                                                        <motion.div
                                                                                                                                                                                                                  initial={{ opacity: 0, y: 20 }}
                                                                                                                                                                                                                            whileInView={{ opacity: 1, y: 0 }}
                                                                                                                                                                                                                                      viewport={{ once: true }}
                                                                                                                                                                                                                                                transition={{ duration: 0.6 }}
                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                  <h2 className="text-center text-4xl font-bold">
                                                                                                                                                                                                                                                                              Skills & Technologies
                                                                                                                                                                                                                                                                                        </h2>

                                                                                                                                                                                                                                                                                                  <p className="mt-3 mb-12 text-center text-slate-400">
  A collection of the technologies, tools, and platforms I use to design, build, debug, and deploy modern applications.
</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                                                                                                                </motion.div>

                                                                                                                                                                                                                                                                                                                                        {/* Skills Grid */}
                                                                                                                                                                                                                                                                                                                                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                                                                                                                                                                                                                                                                                                                                          {skills.map((skill, index) => (
                                                                                                                                                                                                                                                                                                                                                                      <motion.div
                                                                                                                                                                                                                                                                                                                                                                                    key={skill.name}
                                                                                                                                                                                                                                                                                                                                                                                                  initial={{ opacity: 0, y: 40 }}
                                                                                                                                                                                                                                                                                                                                                                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                                                                                                                                                                                                                                                                                                                                                                              viewport={{ once: true }}
                                                                                                                                                                                                                                                                                                                                                                                                                                            transition={{
                                                                                                                                                                                                                                                                                                                                                                                                                                                            duration: 0.5,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            delay: index * 0.1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        whileHover={{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        y: -10,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        scale: 1.05,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-lg"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              {/* Hover Glow */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"></div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {/* Content */}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div className="relative z-10">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div className="mb-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {skill.icon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <h3 className="mb-2 text-xl font-bold">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          {skill.name}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <p className="text-sm text-slate-400">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            {skill.description}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </motion.div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    export default Skills;