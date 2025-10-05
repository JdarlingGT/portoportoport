import { useEffect, useState } from "react";

type Chip = { label: string; value: string };
type AppKey = "clinical-compass" | "roi-calculator" | "license-requirements";

export default function KPIChips({ app }: { app: AppKey }) {
  const [chips, setChips] = useState<Chip[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/data/apps-kpis.json", { cache: "no-store" });
        const all = await res.json();
        if (mounted && all?.[app]?.chips) setChips(all[app].chips);
      } catch {
        /* silent */
      }
    })();
    return () => { mounted = false; };
  }, [app]);

  if (!chips.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {chips.map((c, i) => (
        <span
          key={i}
          className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/90"
          aria-label={`${c.label}: ${c.value}`}
        >
          <span className="opacity-70">{c.label}:</span> <strong className="ml-1">{c.value}</strong>
        </span>
      ))}
    </div>
  );
}
