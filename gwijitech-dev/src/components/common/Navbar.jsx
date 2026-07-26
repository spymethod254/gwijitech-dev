import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-cyan-400"
        >
          &lt;/&gt; GWIJITECH.dev
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-slate-300 md:flex">
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

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white md:hidden"
        >
          {isOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <ul className="flex flex-col px-6 py-4 text-slate-300">
            <li>
              <a
                href="#home"
                className="block py-3 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="block py-3 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="block py-3 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="block py-3 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="block py-3 hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;