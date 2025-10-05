import { useState } from "react";

export default function HotspotHelp({
  tips = []
}: { tips?: { x: string; y: string; text: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm"
      >
        {open ? "Hide tips" : "Show tips"}
      </button>

      {open && (
        <div className="relative mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-sm text-white/80 mb-2">
            Hover the markers to learn what each area does.
          </p>

          <div className="relative w-full h-[320px] rounded-lg bg-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10" />
            {tips.map((t, i) => (
              <div
                key={i}
                className="group absolute"
                style={{ left: t.x, top: t.y }}
              >
                <div className="w-4 h-4 rounded-full bg-cyan-400/70 ring-2 ring-cyan-400/40 cursor-help" />
                <div className="absolute left-5 top-1 hidden group-hover:block bg-[#0B0B0B] border border-white/10 text-xs text-white p-2 rounded-md w-56 shadow-xl z-10">
                  {t.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
