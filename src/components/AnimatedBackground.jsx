import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const blobs = [
    { className: "bg-cyan-400", size: 420, x: -40, y: -80, blur: "blur-3xl", opacity: 0.25 },
    { className: "bg-blue-500", size: 520, x: 40, y: 60, blur: "blur-3xl", opacity: 0.18 },
    { className: "bg-sky-300", size: 360, x: -10, y: 200, blur: "blur-2xl", opacity: 0.22 },
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`${b.className} rounded-full absolute ${b.blur}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: b.opacity, scale: [1, 1.05, 1] }}
          transition={{ duration: 8, delay: i * 0.6, repeat: Infinity, repeatType: "mirror" }}
          style={{ width: b.size, height: b.size, left: `${b.x}%`, top: `${b.y}px` }}
        />
      ))}

      {/* subtle grain */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
        backgroundSize: "6px 6px"
      }} />
    </div>
  );
}
