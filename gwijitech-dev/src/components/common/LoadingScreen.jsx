import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "> boot gwijitech.dev",
  "✔ Initializing React...",
  "✔ Loading portfolio...",
  "✔ Loading projects...",
  "✔ Loading developer profile...",
  "✔ Starting UI engine...",
  "",
  "Welcome to GWIJITECH.dev 🚀",
];

function LoadingScreen() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 350);
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 px-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          {/* Browser Header */}
          <div className="mb-6 flex items-center gap-2 border-b border-slate-800 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>

            <span className="ml-4 text-sm text-slate-500">
              terminal
            </span>
          </div>

          <div className="space-y-2 font-mono text-green-400">
            {visibleLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {line}
              </motion.p>
            ))}

            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="inline-block"
            >
              █
            </motion.span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LoadingScreen;