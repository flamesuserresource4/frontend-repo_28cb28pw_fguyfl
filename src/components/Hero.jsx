export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-gradient-to-b from-cyan-200/40 to-transparent blur-3xl" />
        <div className="absolute top-1/3 -right-10 w-80 h-80 rounded-full bg-sky-300/30 blur-2xl" />
        <div className="absolute bottom-1/4 -left-10 w-80 h-80 rounded-full bg-blue-400/20 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Changing lives through the power of aquatics
            </h1>
            <p className="mt-6 text-lg text-slate-700 max-w-prose">
              We’re a UK social enterprise making hydrotherapy and swimming accessible to everyone. Every booking helps fund subsidised places for those in need.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-blue-700 transition-colors">Explore Services</a>
              <a href="#impact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Our Social Impact</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md text-center">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">2012</p>
                <p className="text-xs text-slate-500">Founded</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">Community</p>
                <p className="text-xs text-slate-500">Social Enterprise</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">Safety</p>
                <p className="text-xs text-slate-500">Lifeguard-led</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-gradient-to-br from-cyan-600 to-blue-700">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop" alt="Pool" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow ring-1 ring-slate-200">
              <p className="text-sm font-medium text-slate-900">Every session supports our mission</p>
              <p className="text-xs text-slate-500">Reinvested back into the community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
