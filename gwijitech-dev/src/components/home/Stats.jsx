import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaRocket />,
    number: "10+",
    label: "Projects Built",
  },
  {
    icon: <FaCode />,
    number: "8+",
    label: "Technologies",
  },
  {
    icon: <FaLaptopCode />,
    number: "1000+",
    label: "Hours Coding",
  },
  {
    icon: <FaLightbulb />,
    number: "∞",
    label: "Ideas",
  },
];

function Stats() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <div className="mb-5 flex justify-center text-5xl text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              {item.icon}
            </div>

            <h2 className="text-5xl font-extrabold text-white">
              {item.number}
            </h2>

            <p className="mt-3 text-base text-slate-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;