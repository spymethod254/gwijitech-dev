const skills = [
      {
          name: "React",
              icon: "⚛️",
                  description: "Building interactive user interfaces.",
                    },
                      {
                          name: "Vite",
                              icon: "⚡",
                                  description: "Fast modern frontend tooling.",
                                    },
                                      {
                                          name: "JavaScript",
                                              icon: "🟨",
                                                  description: "The language of the web.",
                                                    },
                                                      {
                                                          name: "Tailwind CSS",
                                                              icon: "🎨",
                                                                  description: "Utility-first CSS framework.",
                                                                    },
                                                                      {
                                                                          name: "Node.js",
                                                                              icon: "🟢",
                                                                                  description: "JavaScript runtime for backend.",
                                                                                    },
                                                                                      {
                                                                                          name: "Express",
                                                                                              icon: "🚂",
                                                                                                  description: "Minimal backend framework.",
                                                                                                    },
                                                                                                      {
                                                                                                          name: "Supabase",
                                                                                                              icon: "🗄️",
                                                                                                                  description: "Open-source backend platform.",
                                                                                                                    },
                                                                                                                      {
                                                                                                                          name: "Git & GitHub",
                                                                                                                              icon: "🐙",
                                                                                                                                  description: "Version control and collaboration.",
                                                                                                                                    },
                                                                                                                                    ];

                                                                                                                                    function Skills() {
                                                                                                                                      return (
                                                                                                                                          <section
                                                                                                                                                id="skills"
                                                                                                                                                      className="mx-auto max-w-6xl px-6 py-24"
                                                                                                                                                          >
                                                                                                                                                                <h2 className="mb-3 text-center text-4xl font-bold">
                                                                                                                                                                        My Skills
                                                                                                                                                                              </h2>

                                                                                                                                                                                    <p className="mb-12 text-center text-slate-400">
                                                                                                                                                                                            Technologies I use to build modern web applications.
                                                                                                                                                                                                  </p>

                                                                                                                                                                                                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                                                                                                                                                                                                {skills.map((skill) => (
                                                                                                                                                                                                                          <div
                                                                                                                                                                                                                                      key={skill.name}
                                                                                                                                                                                                                                                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                                        <div className="mb-4 text-5xl">
                                                                                                                                                                                                                                                                                      {skill.icon}
                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                              <h3 className="mb-2 text-xl font-bold">
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