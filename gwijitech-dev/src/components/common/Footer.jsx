import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          GWIJITECH.dev
        </h2>

        <p className="mt-3 text-slate-400">
          Code • Create • Innovate
        </p>

        <p className="mt-8 text-sm text-slate-500">
          Built with ❤️ using React, Vite & Tailwind CSS
        </p>

        <p className="mt-2 text-sm text-slate-500">
          © 2026 GWIJITECH.dev. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="mt-8 flex items-center justify-center gap-8">

          <a
            href="https://github.com/spymethod254"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 p-4 text-2xl text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="mailto: hamsogwiji@gmail.com"
            className="rounded-full border border-slate-700 p-4 text-2xl text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/254743710474"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 p-4 text-2xl text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;