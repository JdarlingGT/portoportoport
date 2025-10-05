import { useState } from "react";
import { motion } from "framer-motion";
import SmartFrame from "./SmartFrame";

export default function ClickToLaunch({
  appTitle, tagline, bullets, src, height = 1000
}: {
  appTitle: string;
  tagline?: string;
  bullets?: string[];
  src: string;
  height?: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.section 
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header className="mb-4">
        <h2 className="text-2xl font-semibold text-white">{appTitle}</h2>
        {tagline && <p className="text-slate-300 mt-2">{tagline}</p>}
        {!!bullets?.length && (
          <ul className="mt-3 grid gap-1 text-sm text-slate-300 list-disc pl-5">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
      </header>

      {!open ? (
        <motion.button
          onClick={() => setOpen(true)}
          className="px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/30 hover:text-cyan-300 transition-all duration-300 font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Launch App
        </motion.button>
      ) : (
        <div className="mt-4">
          <SmartFrame src={src} height={height} title={appTitle} />
        </div>
      )}
    </motion.section>
  );
}
