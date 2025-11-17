import { Waves, HeartPulse, UsersRound, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Swimming Lessons",
    desc: "Structured pathways from Ducklings to Advanced, delivered by qualified instructors.",
    levels: ["Ducklings (3–4.5)", "Beginner", "Intermediate", "Advanced"],
  },
  {
    icon: HeartPulse,
    title: "Hydrotherapy",
    desc: "Warm-water rehabilitation and specialist programs like Hydro-cise and Hydro4Fibro.",
    levels: ["1:1 Clinical", "Small Group", "Hydro-cise", "Hydro-Pilates"],
  },
  {
    icon: UsersRound,
    title: "Family Swimming",
    desc: "Inclusive, lifeguard-supervised sessions for families to enjoy the pool together.",
    levels: ["Open Swim", "Sensory-Friendly", "Parent & Baby"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Our Core Services</h2>
          <p className="mt-3 text-slate-600">Designed to include, educate, and inspire at every stage.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, levels }) => (
            <div key={title} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white grid place-items-center shadow">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {levels.map((l) => (
                  <span key={l} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200">{l}</span>
                ))}
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
