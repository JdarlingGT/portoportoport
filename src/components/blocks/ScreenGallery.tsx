type Shot = { src: string; alt: string; caption?: string };

export default function ScreenGallery({ shots }: { shots: Shot[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {shots.map((s, i) => (
        <figure key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <img src={s.src} alt={s.alt} className="w-full h-64 object-cover hover:scale-[1.02] transition-transform" />
          {s.caption && <figcaption className="p-3 text-sm text-gray-300">{s.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
