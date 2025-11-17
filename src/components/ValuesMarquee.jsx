import { useEffect, useRef } from "react";

export default function ValuesMarquee() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const animate = () => {
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  const items = Array(2).fill(
    "Include • Educate • Inspire • Warm-water care • Lifeguard-led • Accessible • Community-first • Evidence-based • Empathetic • Professional • "
  ).join("");

  return (
    <div className="relative py-6 bg-gradient-to-r from-cyan-50 via-white to-blue-50 border-y border-slate-200/60">
      <div
        ref={ref}
        className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-x-scroll scrollbar-hide whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
        aria-hidden
      >
        <p className="text-slate-700/80 text-sm font-medium tracking-wide inline-block px-4">
          {items}
        </p>
      </div>
    </div>
  );
}
