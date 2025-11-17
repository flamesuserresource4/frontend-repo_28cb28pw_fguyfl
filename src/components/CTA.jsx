export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 p-10 shadow-xl">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center text-white">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">Ready to make a splash?</h3>
              <p className="mt-2 text-white/90 text-sm">Start with a friendly intro call — we’ll match you to the right level or hydro program.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-slate-100 transition">Book Intro Call</a>
              <a href="#services" className="inline-flex items-center rounded-full bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/40 hover:bg-white/15 transition">Explore Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
