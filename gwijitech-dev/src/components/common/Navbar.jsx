function Navbar() {
      return (
          <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        {/* Logo */}
                                <a href="/" className="text-xl font-bold text-cyan-400">
                                          &lt;/&gt; GWIJITECH.dev
                                                  </a>

                                                          {/* Navigation */}
                                                                  <ul className="hidden gap-8 text-slate-300 md:flex">
                                                                            <li>
                                                                                        <a href="#home" className="transition hover:text-cyan-400">
                                                                                                      Home
                                                                                                                  </a>
                                                                                                                            </li>

                                                                                                                                      <li>
                                                                                                                                                  <a href="#about" className="transition hover:text-cyan-400">
                                                                                                                                                                About
                                                                                                                                                                            </a>
                                                                                                                                                                                      </li>

                                                                                                                                                                                                <li>
                                                                                                                                                                                                            <a href="#skills" className="transition hover:text-cyan-400">
                                                                                                                                                                                                                          Skills
                                                                                                                                                                                                                                      </a>
                                                                                                                                                                                                                                                </li>

                                                                                                                                                                                                                                                          <li>
                                                                                                                                                                                                                                                                      <a href="#projects" className="transition hover:text-cyan-400">
                                                                                                                                                                                                                                                                                    Projects
                                                                                                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                                                                                                          </li>

                                                                                                                                                                                                                                                                                                                    <li>
                                                                                                                                                                                                                                                                                                                                <a href="#contact" className="transition hover:text-cyan-400">
                                                                                                                                                                                                                                                                                                                                              Contact
                                                                                                                                                                                                                                                                                                                                                          </a>
                                                                                                                                                                                                                                                                                                                                                                    </li>
                                                                                                                                                                                                                                                                                                                                                                            </ul>
                                                                                                                                                                                                                                                                                                                                                                                  </nav>
                                                                                                                                                                                                                                                                                                                                                                                      </header>
                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                        export default Navbar;