import { useEffect, useRef, useState } from "react";

export default function SmartFrame({
  src,
  height = 1000,
  title
}: { src: string; height?: number; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onLoad = () => setLoaded(true);
    el.addEventListener("load", onLoad);
    return () => el.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-white/5">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
            Loading app...
          </div>
        </div>
      )}
      <iframe
        ref={ref}
        title={title}
        src={src}
        width="100%"
        height={height}
        className="block"
        loading="lazy"
      />
    </div>
  );
}
