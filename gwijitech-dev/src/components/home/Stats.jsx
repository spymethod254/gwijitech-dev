import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket, FaLightbulb } from "react-icons/fa";

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
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
          >
            <div className="mb-5 flex justify-center text-5xl text-cyan-400">
              {item.icon}
            </div>

            <h2 className="text-4xl font-bold text-white">
              {item.number}
            </h2>

            <p className="mt-2 text-slate-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;