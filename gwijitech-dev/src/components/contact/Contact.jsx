import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaEnvelope, } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold">
          Let's Build Something Amazing 🚀
        </h2>

        <p className="mt-4 text-slate-400">
          Have a project idea, collaboration, or just want to say hello?
          I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-2">

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-lg"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-cyan-400"
          />

          <textarea
            rows="6"
            placeholder="Your Message..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-cyan-400"
          />

          <button
            className="w-full rounded-xl bg-cyan-400 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Send Message 🚀
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-lg"
        >
          <h3 className="mb-6 text-3xl font-bold">
            Contact Information
          </h3>

          <div className="space-y-5">

            <a
              href="mailto:hamsogwiji@gmail.com"
              className="flex items-center gap-4 rounded-xl bg-slate-950 p-4 transition hover:bg-slate-800"
            >
              <FaEnvelope className="text-2xl text-cyan-400" />
              <span>your@email.com</span>
            </a>

            <a
              href="https://github.com/spymethod254"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-slate-950 p-4 transition hover:bg-slate-800"
            >
              <FaGithub className="text-2xl text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              href="https://wa.me/254743710474"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-slate-950 p-4 transition hover:bg-slate-800"
            >
              <FaWhatsapp className="text-2xl text-cyan-400" />
              <span>WhatsApp</span>
            </a>

          </div>

          <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
            <h4 className="text-xl font-semibold text-cyan-400">
              Available For
            </h4>

            <ul className="mt-4 space-y-2 text-slate-300">
              <li>✅ Frontend Development</li>
              <li>✅ React & Vite Projects</li>
              <li>✅ UI/UX Improvements</li>
              <li>✅ Web Application Development</li>
            </ul>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;