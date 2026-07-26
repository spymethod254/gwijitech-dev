import {
      SiReact,
        SiVite,
          SiJavascript,
            SiTailwindcss,
              SiNodedotjs,
                SiExpress,
                  SiSupabase,
                    SiGithub,
                    } from "react-icons/si";

                    const skills = [
                      {
                          name: "React",
                              icon: <SiReact className="text-5xl text-sky-400" />,
                                  description: "Building interactive user interfaces.",
                                    },
                                      {
                                          name: "Vite",
                                              icon: <SiVite className="text-5xl text-violet-400" />,
                                                  description: "Fast modern frontend tooling.",
                                                    },
                                                      {
                                                          name: "JavaScript",
                                                              icon: <SiJavascript className="text-5xl text-yellow-400" />,
                                                                  description: "The language of the web.",
                                                                    },
                                                                      {
                                                                          name: "Tailwind CSS",
                                                                              icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
                                                                                  description: "Utility-first CSS framework.",
                                                                                    },
                                                                                      {
                                                                                          name: "Node.js",
                                                                                              icon: <SiNodedotjs className="text-5xl text-green-500" />,
                                                                                                  description: "JavaScript runtime for backend.",
                                                                                                    },
                                                                                                      {
                                                                                                          name: "Express",
                                                                                                              icon: <SiExpress className="text-5xl text-gray-300" />,
                                                                                                                  description: "Minimal backend framework.",
                                                                                                                    },
                                                                                                                      {
                                                                                                                          name: "Supabase",
                                                                                                                              icon: <SiSupabase className="text-5xl text-emerald-400" />,
                                                                                                                                  description: "Open-source backend platform.",
                                                                                                                                    },
                                                                                                                                      {
                                                                                                                                          name: "GitHub",
                                                                                                                                              icon: <SiGithub className="text-5xl text-white" />,
                                                                                                                                                  description: "Version control and collaboration.",
                                                                                                                                                    },
                                                                                                                                                    ];

                                                                                                                                                    function Skills() {
                                                                                                                                                      return (
                                                                                                                                                          <section
                                                                                                                                                                id="skills"
                                                                                                                                                                      className="mx-auto max-w-6xl px-6 py-24"
                                                                                                                                                                          >
                                                                                                                                                                                <h2 className="text-4xl font-bold text-center mb-3">
                                                                                                                                                                                        Skills & Technologies
                                                                                                                                                                                              </h2>

                                                                                                                                                                                                    <p className="text-center text-slate-400 mb-12">
                                                                                                                                                                                                            Technologies I use to design and build modern web applications.
                                                                                                                                                                                                                  </p>

                                                                                                                                                                                                                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                                                                                                                                                                                                                {skills.map((skill) => (
                                                                                                                                                                                                                                          <div
                                                                                                                                                                                                                                                      key={skill.name}
                                                                                                                                                                                                                                                                  className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
                                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                                        <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
                                                                                                                                                                                                                                                                                                      {skill.icon}
                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                              <h3 className="mb-2 text-xl font-semibold">
                                                                                                                                                                                                                                                                                                                                            {skill.name}
                                                                                                                                                                                                                                                                                                                                                        </h3>

                                                                                                                                                                                                                                                                                                                                                                    <p className="text-sm text-slate-400">
                                                                                                                                                                                                                                                                                                                                                                                  {skill.description}
                                                                                                                                                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                          </section>
                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                                                            export default Skills;