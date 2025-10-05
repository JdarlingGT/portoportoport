type Feature = { title: string; bullets: string[] };

export default function FeatureList({ items }: { items: Feature[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((f, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-lg font-semibold">{f.title}</h3>
          <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-200">
            {f.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
