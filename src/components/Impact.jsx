export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">A social enterprise making waves</h2>
            <p className="mt-4 text-slate-700">
              We reinvest our surplus to expand access: subsidised hydrotherapy places, accessible hoists, and outreach in underserved communities. Your booking powers real impact.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700 text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" /> Subsidised sessions for those in financial hardship</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" /> Investment in state-of-the-art accessibility equipment</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" /> Dedicated programs for rehabilitation and chronic pain</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200&auto=format&fit=crop" alt="Hydrotherapy" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1625674967351-655dfa7362c7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZXNzb25zfGVufDB8MHx8fDE3NjM0MTg4NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Lessons" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1528755184552-340f01ddda93?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGYW1pbHklMjBzd2ltfGVufDB8MHx8fDE3NjM0MTg4NTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Family swim" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb21tdW5pdHl8ZW58MHwwfHx8MTc2MzQxODg1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Community" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
