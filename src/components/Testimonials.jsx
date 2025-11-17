import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amelia, Parent",
    text: "Our son went from anxious to excited — the team were so patient and encouraging.",
    rating: 5,
  },
  {
    name: "Mark, Hydrotherapy",
    text: "Warm, safe and expertly guided. My mobility and confidence are night-and-day.",
    rating: 5,
  },
  {
    name: "Priya, Family Swim",
    text: "Sensory-friendly sessions made swimming possible for us again.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Loved by our community</h2>
          <p className="mt-3 text-slate-600">Real stories from swimmers and families who found their confidence in the water.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#eab308" className="text-yellow-500" />
                ))}
              </div>
              <p className="mt-4 text-slate-700 text-sm">{t.text}</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
